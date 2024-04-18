<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-card class="mx-auto">
      <v-container>
        <v-btn
          color="primary"
          text
          class="ml-auto"
          v-if="userData.includes('add')"
          @click="add()"
        >
          <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة نموذج جديد
        </v-btn>

        <v-data-table
          :headers="table.headers"
          loading-text="جاري التحميل ... الرجاء الانتظار"
          :items="table.centers"
          class="elevation-1"
          no-results-text="لا توجد بيانات !"
        >
          <template v-slot:item.num="{ item }">
            {{ table.centers.indexOf(item) + 1 }}
          </template>
          <template v-slot:item.images="{ item }">
            <img
              @click="showImgs(item)"
              :src="content_url + item.images[0]"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </template>
          <template v-slot:item.name="{ item }">
            <v-btn @click="showP(item)" text color="primary">
              {{ item.name }}
            </v-btn>
          </template>

          <template v-slot:item.ac="{ item }">
            <VTooltip bottom v-if="userData.includes('edit')">
              <template #activator="{ attrs }">
                <v-icon
                  color="rgb(243 216 1)"
                  v-bind="attrs"
                  size="20"
                  @click="editP(item)"
                >
                  mdi-note-edit
                </v-icon>
              </template>
              <span>تعديل</span>
            </VTooltip>
            <VTooltip bottom v-if="userData.includes('remove')">
              <template #activator="{ attrs }">
                <v-icon
                  color="#FF5252"
                  v-bind="attrs"
                  size="20"
                  @click="deleteItem(item)"
                >
                  mdi-delete-restore
                </v-icon>
              </template>
              <span>حذف</span>
            </VTooltip>
          </template>
        </v-data-table>
      </v-container>
    </v-card>

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="clossMess"> تم </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text class="headline justify-center" v-if="showImg.dataImg !== null">
          <v-carousel>
            <v-carousel-item v-for="(img, i) in showImg.dataImg" :key="i">
              <img :src="content_url + img" style="width: 100%" />
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showImg.open = false"> إغلاق </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - showImg -->

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذا النموذج ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false"> الغاء </v-btn>
          <v-btn
            color="primary white--text"
            :loading="deleteItemLoading"
            @click="deleteItemConfirm"
          >
            حذف
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End delete dailog -->
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      userDataString: null,
      // nav
      page: {
        title: "النماذج",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "النماذج",
          disabled: true,
        },
      ],
      // nav
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
      // edit
      editItemLoading: false,
      dialogEdit: false,
      old_image: null,
      editdItem: {},
      tagsE: [],
      editedImages: [],
      housesE: "",
      file: { size: 123, name: "Icon", type: "image/png" },
      dropzoneOptionsE: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        acceptedFiles: "image/*",
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>إضافة صور الطابق",
        dictRemoveFile: "<i class='fa fa-trash-alt'></i>",
        headers: {
          "My-Awesome-Header": "header value",
        },
        files: [],
      },
      dropzoneOptionsEFloors: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        acceptedFiles: "image/*",
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>إضافة صور الطابق",
        dictRemoveFile: "<i class='fa fa-trash-alt'></i>",
        headers: {
          "My-Awesome-Header": "header value",
        },
      },

      // edit
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: [],
        name: null,
      },
      // showImg
      table: {
        content_url: null,
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "الأسم", value: "name" },
          { text: "الصوره", value: "images" },
          { text: "عدد الطوابق", value: "floors.length" },
          { text: "مساحة البناء", value: "building_space" },
          { text: "المساحة الكلية", value: "total_space" },
          { text: "عدد المنازل", value: "houses.length" },
          { text: "عرض", value: "ac" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
    };
  },
  created() {
    var FormMass = localStorage.getItem("itemFormMass");
    if (FormMass) {
      this.showDialogfunction(FormMass, "primary");
    }

    var userDataString = JSON.parse(localStorage.getItem("user"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.getCenter();
  },
  watch: {
    tagsE: {
      handler: function () {
        this.addHoE();
      },
      deep: true,
    },
    tags: {
      handler: function () {
        this.addHo();
      },
      deep: true,
    },
    is_available(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
    type(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCenter();
      }
    },
  },
  methods: {
    clossMess() {
      var FormMass = localStorage.getItem("itemFormMass");
      if (FormMass) {
        localStorage.removeItem("itemFormMass");
        this.dialogData.open = false
      } else {
        this.dialogData.open = false
      }
    },
    showP(item) {
      localStorage.setItem("itemForm", JSON.stringify(item));
      this.$router.push("/forms/Show");
    },
    editP(item) {
      localStorage.setItem("itemForm", JSON.stringify(item));
      this.$router.push("/forms/Edit");
    },
    add() {
      this.$router.push("/admin-add-forms");
    },
    addHoE() {
      this.editdItem.houses = [];
      this.tagsE.forEach((tag) => {
        if ("text" in tag) {
          this.editdItem.houses.push(tag.text);
        }
      });
    },
    addHo() {
      this.data.houses = [];
      this.tags.forEach((tag) => {
        if ("text" in tag) {
          this.data.houses.push(tag.text);
        }
      });
    },
    handleFileUploadSuccess(file) {
      const dataURL = file.dataURL;
      this.data.images.push(dataURL);
    },
    handleFileRemoved(file) {
      const dataURLToRemove = file.dataURL;
      const indexToRemove = this.data.images.indexOf(dataURLToRemove);
      if (indexToRemove !== -1) {
        this.data.images.splice(indexToRemove, 1);
      }
    },
    handleFileUploadSuccessE(file) {
      const dataURL = file.dataURL;
      this.data.images.push(dataURL);
    },
    handleFileRemovedE(file) {
      const dataURLToRemove = file.dataURL;
      const indexToRemove = this.data.images.indexOf(dataURLToRemove);
      if (indexToRemove !== -1) {
        this.data.images.splice(indexToRemove, 1);
      }
    },
    handleFileUploadSuccessFloors(file, ind) {
      const dataURL = file.dataURL;
      this.data.floors[ind].images.push(dataURL);
    },
    handleFileRemovedFloors(file, ind) {
      const dataURLToRemove = file.dataURL;
      const indexToRemove = this.data.floors[ind].images.indexOf(dataURLToRemove);
      if (indexToRemove !== -1) {
        this.data.floors[ind].images.splice(indexToRemove, 1);
      }
    },
    deletItme(index) {
      this.data.floors.splice(index, 1);
    },
    addNewItems() {
      this.data.floors.push({
        name: "",
        images: [],
        rooms: [
          {
            name: "",
            image: null,
            space: null,
          },
        ],
      });
    },
    addNewItem(index) {
      this.data.floors[index].rooms.push({
        name: "",
        image: null,
        space: null,
      });
    },
    deletItm(index, i) {
      this.data.floors[index].rooms.splice(i, 1);
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    handleFileChange(event, floor, roomIndex) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.floors[floor].rooms[roomIndex].image = reader.result;
        };
        reader.readAsDataURL(file);
      }
      console.log("floors", this.data.floors);
    },
    removeImage(floor, roomIndex) {
      this.data.floors[floor].rooms[roomIndex].image = null;

      if (this.selectedFile) {
        this.selectedFile = null;
      }
    },
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item.images;
    },

    async getCenter() {
      try {
        this.table.loading = true;
        const response = await API.getForms();
        this.content_url = response.data.content_url;
        this.table.centers = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    async addCenter(event) {
      if (this.data.images == null) {
        this.showDialogfunction("يرجى إضافة صوره الى النموذج", "#FF5252");
      } else if (this.data.floors.length === 0) {
        this.showDialogfunction("يرجى إضافة تفاصيل الى النموذج", "#FF5252");
      } else if (this.data.houses.length === 0) {
        this.showDialogfunction("يرجى إضافة ارقام المنازل", "#FF5252");
      } else {
        let hasSubDetails = true;
        for (let i = 0; i < this.data.floors.length; i++) {
          if (this.data.floors[i].rooms.length === 0) {
            hasSubDetails = false;
            break;
          }
        }
        if (!hasSubDetails) {
          this.showDialogfunction("يرجى إضافة تفاصيل النموذج الفرعية", "#FF5252");
        } else {
          let allFloorsHaveImages = true;
          for (let i = 0; i < this.data.floors.length; i++) {
            if (this.data.floors[i].images == null) {
              allFloorsHaveImages = false;
              break;
            }
          }
          if (!allFloorsHaveImages) {
            this.showDialogfunction("يرجى إضافة صوره الى الطابق", "#FF5252");
          } else {
            event.preventDefault();
            this.addLoading = true;
            try {
              const response = await API.addForms({
                name: this.data.name,
                total_space: this.data.total_space,
                images: this.data.images,
                houses: this.data.houses,
                floors: this.data.floors,
                building_space: this.data.building_space,
              });
              this.data.name = null;
              this.data.total_space = null;
              this.data.images = [];
              this.data.houses = [];
              this.tags = [];
              this.data.floors = [
                {
                  name: "",
                  images: [],
                  rooms: [
                    {
                      name: "",
                      image: null,
                      space: null,
                    },
                  ],
                },
              ];
              this.data.building_space = null;
              this.dialog = false;
              this.addLoading = false;
              this.getCenter();
              this.showDialogfunction(response.data.message, "primary");
            } catch (error) {
              if (error.response && error.response.status === 401) {
                this.$router.push("/login");
              } else if (error.response && error.response.status === 500) {
                this.showDialogfunction(error.response.data.message, "#FF5252");
              }
            }
          }
        }
      }
    },
    editItem(item) {
      this.editdItem = { ...item };
      this.dialogEdit = true;
      this.tagsE = [];
      for (var i = 0; i < this.editdItem.houses.length; i++) {
        var newData = { text: this.editdItem.houses[i].name, tiClasses: ["ti-valid"] };
        this.tagsE.push(newData);
      }

      this.$nextTick(() => {
        this.$refs.myVueDropzoneE.removeAllFiles();

        var newImages = this.editdItem.images.map((image) => {
          var file = { size: 123, name: "Icon", type: "image/png" };
          var url = this.content_url + image;

          return { file, url };
        });

        newImages.forEach(({ file, url }) => {
          this.$refs.myVueDropzoneE.manuallyAddFile(file, url);
        });
      });
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.deleteForms(this.deletedItem._id);

        this.deleteItemLoading = false;
        this.dialogDelete = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.ti-input[data-v-61d92e31] {
  padding-block: 15px !important;
}
.vue-dropzone > .dz-preview .dz-remove {
  width: 100%;
}
</style>

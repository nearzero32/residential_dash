<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div>
      <div class="mt-4">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col class="d-flex" cols="12" sm="2">
                <v-btn
                  color="primary"
                  style="margin: 0px"
                  v-if="userData.includes('add')"
                  text
                  class="ml-auto"
                  @click="dialog = true"
                >
                  <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة مالك جديد
                </v-btn>
              </v-col>
              <v-col class="d-flex" cols="12" sm="5">
                <v-select
                  :items="items"
                  v-model="is_deleted"
                  label="الملاك"
                  outlined
                ></v-select>
              </v-col>

              <v-spacer></v-spacer>
              <v-col class="d-flex" cols="12" sm="5">
                <v-text-field
                  v-model="table.search"
                  @input="getCenter"
                  append-icon="mdi-magnify"
                  label="بحث"
                  outlined
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table
            :headers="table.headers"
            loading-text="جاري التحميل ... الرجاء الانتظار"
            :items="table.centers"
            :options.sync="tableOptions"
            :server-items-length="table.totalItems"
            :loading="table.loading"
            class="elevation-1"
            no-results-text="لا توجد بيانات !"
            @update:options="getCenter"
          >
            <template v-slot:item.num="{ item }">
              {{ table.centers.indexOf(item) + 1 }}
            </template>
            <template v-slot:item.name="{ item }">
              <router-link :to="'/profile/' + item._id">
                {{ item.name }}
              </router-link>
            </template>
            <template v-slot:item.privileges.actions="{ item }">
              <strong v-if="item.privileges.actions.includes('add')">
                أضافة
              </strong>
              <strong v-if="item.privileges.actions.includes('edit')">
                تعديل
              </strong>
              <strong v-if="item.privileges.actions.includes('remove')">
                حذف
              </strong>
            </template>
            <template v-slot:item.image="{ item }">
              <img
                v-if="item.image"
                @click="showImgs(item.image)"
                :src="table.content_url + item.image"
                alt="Image"
                style="
                  max-width: 100%;
                  max-height: 100%;
                  display: block;
                  margin: 0 auto;
                  border: solid 1px rebeccapurple;
                  width: 60px;
                  height: 60px;
                "
              />
            </template>
            <template v-slot:item.actions="{ item }">
              <VTooltip bottom v-if="userData.includes('edit')">
                <template #activator="{ attrs }">
                  <v-icon
                    color="rgb(251 151 120)"
                    v-bind="attrs"
                    size="20"
                    @click="editItem(item)"
                  >
                    mdi-note-edit
                  </v-icon>
                </template>
                <span>تعديل</span>
              </VTooltip>
              <VTooltip bottom>
                <template #activator="{ attrs }">
                  <v-icon
                    color="#fffc00"
                    v-bind="attrs"
                    size="20"
                    @click="Print(item)"
                  >
                    mdi-printer
                  </v-icon>
                </template>
                <span>طباعه</span>
              </VTooltip>
              <VTooltip bottom>
                <template #activator="{ attrs }">
                  <v-icon
                    v-if="item.is_disabled == false"
                    color="#FF5252"
                    v-bind="attrs"
                    size="20"
                    @click="disable(item)"
                  >
                    mdi-pause-octagon
                  </v-icon>
                  <v-icon
                    v-else
                    color="rgb(0 235 53)"
                    v-bind="attrs"
                    size="20"
                    @click="disable(item)"
                  >
                    mdi-play-circle
                  </v-icon>
                </template>
                <span>أيقاف</span>
              </VTooltip>
              <!-- <VTooltip bottom v-if="userData.includes('remove')">
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
              </VTooltip> -->
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة مالك جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >أسم المستخدم</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.nameRules"
                    v-model="data.name"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >البريد الألكتروني</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.emailRules"
                    outlined
                    v-model="data.email"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.phoneRules"
                    v-model="data.phone"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">كلمة المرور</v-label>
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.password_showRules"
                    v-model="data.password_show"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهوية</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.id_number"
                    v-model="data.id_number"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >جهة اصدار الهوية</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.id_place_of_issue"
                    v-model="data.id_place_of_issue"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >تاريخ اصدار الهوية</v-label
                  >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="data.id_issue_date"
                        :rules="Rules.id_issue_date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="data.id_issue_date"
                      :rules="Rules.id_issue_date"
                      :active-picker.sync="activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substring(0, 10)
                      "
                      min="1950-01-01"
                      @change="save"
                      outlined
                      color="primary"
                      variant="outlined"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >رقم بطاقة السكن</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.residence_card_number"
                    v-model="data.residence_card_number"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >جهة اصدار بطاقة السكن</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.residence_card_place_of_issue"
                    v-model="data.residence_card_place_of_issue"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >تاريخ اصدار بطاقة السكن</v-label
                  >
                  <v-menu
                    ref="menuCard"
                    v-model="menuCard"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="data.residence_card_issue_date"
                        :rules="Rules.residence_card_issue_date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="data.residence_card_issue_date"
                      :rules="Rules.residence_card_issue_date"
                      :active-picker.sync="activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substring(0, 10)
                      "
                      min="1950-01-01"
                      @change="saveE"
                      outlined
                      color="primary"
                      variant="outlined"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >العنوان الوظيفي</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.owner_title_jop"
                    v-model="data.owner_title_jop"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">العنوان</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.addressRules"
                    v-model="data.address"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">المصرف</v-label>
                  <v-autocomplete
                    label="المصرف"
                    :items="BankAccounts"
                    v-model="data.bank_id"
                    :rules="Rules.bank"
                    item-text="name"
                    item-value="_id"
                    variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">النموذج</v-label>
                  <v-autocomplete
                    label="النموذج"
                    :items="Forms"
                    v-model="data.form"
                    :rules="Rules.form_id"
                    :item-text="getItemText"
                    item-value="_id"
                    return-object
                    variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6" v-if="HousesShow">
                  <v-label class="mb-2 font-weight-medium">المنزل</v-label>
                  <v-autocomplete
                    label="المنزل"
                    :items="filteredHouses"
                    v-model="data.house_id"
                    :item-text="formatHouse"
                    item-value="_id"
                    variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صور العقد
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChange"
                        style="display: none"
                        ref="fileInputContract"
                        multiple
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        :rules="Rules.image"
                        label="الصور"
                        outlined
                        :value="
                          selectedFiles.map((file) => file.file.name).join(', ')
                        "
                        @click="$refs.fileInputContract.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="6" md="6">
                      <v-row>
                        <v-col
                          v-for="(file, index) in selectedFiles"
                          :key="index"
                          cols="3"
                          md="3"
                          style="text-align: center"
                        >
                          <div
                            style="position: relative; display: inline-block"
                          >
                            <img
                              :src="file.base64"
                              style="
                                max-width: 100%;
                                max-height: 100%;
                                display: block;
                                margin: 0 auto;
                                border: solid 1px rebeccapurple;
                                width: 60px;
                                height: 60px;
                              "
                            />
                            <v-icon
                              class="mr-2"
                              color="error"
                              style="
                                position: absolute;
                                top: 0;
                                right: 0;
                                cursor: pointer;
                              "
                              @click="removeImage(index)"
                            >
                              mdi-close
                            </v-icon>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة الهوية الأمامية
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeIDO"
                        style="display: none"
                        ref="fileInputIDO"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة الهوية الأمامية"
                        outlined
                        v-model="selectedFile"
                        @click="$refs.fileInputIDO.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="data.id_img_front"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          :src="data.id_img_front"
                          style="width: 120px; border: solid 1px rebeccapurple"
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageIDO"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة الهوية الخلفية
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeIDT"
                        style="display: none"
                        ref="fileInputIDT"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة الهوية الأمامية"
                        outlined
                        v-model="selectedFileT"
                        @click="$refs.fileInputIDT.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="data.id_img_back"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          :src="data.id_img_back"
                          style="width: 120px; border: solid 1px rebeccapurple"
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageIDT"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة بطاقة السكن الامامية
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeL"
                        style="display: none"
                        ref="fileInputL"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة بطاقة السكن الامامية"
                        outlined
                        v-model="selectedFileL"
                        @click="$refs.fileInputL.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="data.location_img_front"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          :src="data.location_img_front"
                          style="width: 120px; border: solid 1px rebeccapurple"
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageL"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة بطاقة السكن الخلفية
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeLT"
                        style="display: none"
                        ref="fileInputLT"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة بطاقة السكن الخلفية"
                        outlined
                        v-model="selectedFileLT"
                        @click="$refs.fileInputLT.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="data.location_img_back"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          :src="data.location_img_back"
                          style="width: 120px; border: solid 1px rebeccapurple"
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageLT"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة الجواز
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeP"
                        style="display: none"
                        ref="fileInputP"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة الجواز"
                        outlined
                        v-model="selectedFileP"
                        @click="$refs.fileInputP.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="data.passport_img"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          :src="data.passport_img"
                          style="width: 120px; border: solid 1px rebeccapurple"
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageP"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <!----Personal Info---->
              <v-card-actions>
                <v-btn
                  size="large"
                  @click="addCenter"
                  :loading="addBtnLoading"
                  color="primary"
                  :disabled="!isFormvalid"
                  type="submit"
                  text
                  >اٍضافة</v-btn
                >
                <v-btn
                  class="bg-lighterror text-error ml-4"
                  @click="dialog = false"
                  text
                  >أغلاق</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- add -->

    <!-- - showImg -->
    <v-dialog v-model="showImg.open" max-width="800px" style="overflow: hidden">
      <v-card style="padding-top: 20px">
        <v-card-text
          class="headline justify-center"
          v-if="showImg.dataImg !== null"
        >
          <img style="width: 100%" :src="table.content_url + showImg.dataImg" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="showImg.open = false">
            إغلاق
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - showImg -->

    <!-- edit dialog -->
    <v-dialog v-model="dialogEdit" max-width="800px">
      <v-card>
        <v-card elevation="10">
          <v-card-title class="text-h5">تعديل الحساب</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >أسم المستخدم</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    outlined
                    :rules="Rules.nameRules"
                    v-model="editdItem.name"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >البريد الألكتروني</v-label
                  >
                  <v-text-field
                    outlined
                    variant="outlined"
                    :rules="Rules.emailRules"
                    v-model="editdItem.email"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهاتف</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.phoneRules"
                    outlined
                    v-model="editdItem.phone"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">كلمة المرور</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.password_showRules"
                    outlined
                    v-model="editdItem.password_show"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">رقم الهوية</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.id_number"
                    v-model="editdItem.id_number"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >جهة اصدار الهوية</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.id_place_of_issue"
                    v-model="editdItem.id_place_of_issue"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >تاريخ اصدار الهوية</v-label
                  >
                  <v-menu
                    ref="menuE"
                    v-model="menuE"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="editdItem.id_issue_date"
                        :rules="Rules.id_issue_date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="editdItem.id_issue_date"
                      :rules="Rules.id_issue_date"
                      :active-picker.sync="activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substring(0, 10)
                      "
                      min="1950-01-01"
                      @change="saveE"
                      outlined
                      color="primary"
                      variant="outlined"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >رقم بطاقة السكن</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.residence_card_number"
                    v-model="editdItem.residence_card_number"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >جهة اصدار بطاقة السكن</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.residence_card_place_of_issue"
                    v-model="editdItem.residence_card_place_of_issue"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >تاريخ اصدار بطاقة السكن</v-label
                  >
                  <v-menu
                    ref="menuCardE"
                    v-model="menuCardE"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="
                          editdItem.residence_card_issue_date
                        "
                        :rules="Rules.residence_card_issue_date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="editdItem.residence_card_issue_date"
                      :rules="Rules.residence_card_issue_date"
                      :active-picker.sync="activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substring(0, 10)
                      "
                      min="1950-01-01"
                      @change="saveE"
                      outlined
                      color="primary"
                      variant="outlined"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >العنوان الوظيفي</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.owner_title_jop"
                    v-model="editdItem.owner_title_jop"
                    outlined
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">العنوان</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.addressRules"
                    outlined
                    v-model="editdItem.address"
                    color="primary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">المصرف</v-label>
                  <v-autocomplete
                    label="المصرف"
                    :items="BankAccounts"
                    v-model="editdItem.bank_id"
                    :rules="Rules.bank"
                    item-text="name"
                    item-value="_id"
                    variant="outlined"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">النموذج</v-label>
                  <v-autocomplete
                    label="النموذج"
                    :items="Forms"
                    v-model="editdItem.form_id"
                    :rules="Rules.form_id"
                    :item-text="getItemText"
                    @change="getHousesEdit"
                    item-value="_id"
                    return-object
                    variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">المنزل</v-label>
                  <v-autocomplete
                    label="المنزل"
                    :items="Houses"
                    v-model="editdItem.house_id"
                    :rules="Rules.house_id_rules"
                    :item-text="formatHouse"
                    item-value="_id"
                    variant="outlined"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صور العقد
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEdit"
                        style="display: none"
                        ref="fileInput"
                        multiple
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صور العقد "
                        outlined
                        :value="
                          selectedFiles.map((file) => file.file.name).join(', ')
                        "
                        @click="$refs.fileInput.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      >
                      </v-text-field>
                    </v-col>

                    <v-col cols="6" md="6" v-if="editdItem.contract_imgs">
                      <v-row>
                        <v-col
                          v-for="(file, index) in editdItem.contract_imgs"
                          :key="index"
                          cols="3"
                          md="3"
                          style="text-align: center"
                        >
                          <div
                            style="
                              position: relative;
                              display: inline-block;
                              text-align: center;
                            "
                          >
                            <div
                              style="display: inline-block; position: relative"
                            >
                              <img
                                v-if="!file.startsWith('data:image')"
                                :src="table.content_url + file"
                                alt="Image"
                                style="
                                  max-width: 100%;
                                  max-height: 100%;
                                  display: block;
                                  margin: 0 auto;
                                  border: solid 1px rebeccapurple;
                                  width: 60px;
                                  height: 60px;
                                "
                              />
                              <img
                                v-else
                                :src="file"
                                alt="Image"
                                style="
                                  max-width: 100%;
                                  max-height: 100%;
                                  display: block;
                                  margin: 0 auto;
                                  border: solid 1px rebeccapurple;
                                  width: 60px;
                                  height: 60px;
                                "
                              />
                              <v-icon
                                class="mr-2"
                                color="error"
                                style="
                                  position: absolute;
                                  top: 0;
                                  right: 0;
                                  cursor: pointer;
                                "
                                @click="removeImageEdit(index)"
                              >
                                mdi-close
                              </v-icon>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة الهوية الأمامية</v-label
                      >
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEditIDO"
                        style="display: none"
                        ref="fileInputEditIDO"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة الهوية الأمامية"
                        v-model="selectedFile"
                        outlined
                        @click="$refs.fileInputEditIDO.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="editdItem.id_img_front"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          id="oldL"
                          :src="`${
                            editdItem.id_img_front.startsWith(
                              'data:image/jpeg;base64,'
                            ) ||
                            editdItem.id_img_front.startsWith(
                              'data:image/png;base64,'
                            ) ||
                            editdItem.id_img_front.startsWith(
                              'data:image/gif;base64,'
                            ) ||
                            editdItem.id_img_front.startsWith(
                              'data:image/bmp;base64,'
                            )
                              ? editdItem.id_img_front
                              : table.content_url + editdItem.id_img_front
                          }`"
                          style="
                            display: block;
                            width: 120px;
                            border: solid 1px rebeccapurple;
                          "
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageEditIDO"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة الهوية الخلفية
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEditIDT"
                        style="display: none"
                        ref="fileInputEditIDT"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة الهوية الخلفية"
                        v-model="selectedFileT"
                        outlined
                        @click="$refs.fileInputEditIDT.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="editdItem.id_img_back"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          id="oldL"
                          :src="`${
                            editdItem.id_img_back.startsWith(
                              'data:image/jpeg;base64,'
                            ) ||
                            editdItem.id_img_back.startsWith(
                              'data:image/png;base64,'
                            ) ||
                            editdItem.id_img_back.startsWith(
                              'data:image/gif;base64,'
                            ) ||
                            editdItem.id_img_back.startsWith(
                              'data:image/bmp;base64,'
                            )
                              ? editdItem.id_img_back
                              : table.content_url + editdItem.id_img_back
                          }`"
                          style="
                            display: block;
                            width: 120px;
                            border: solid 1px rebeccapurple;
                          "
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageEditIDT"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة بطاقة السكن الامامية
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEditL"
                        style="display: none"
                        ref="fileInputEditL"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة بطاقة السكن الامامية"
                        v-model="selectedFileL"
                        outlined
                        @click="$refs.fileInputEditL.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="editdItem.location_img_front"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          id="oldL"
                          :src="`${
                            editdItem.location_img_front.startsWith(
                              'data:image/jpeg;base64,'
                            ) ||
                            editdItem.location_img_front.startsWith(
                              'data:image/png;base64,'
                            ) ||
                            editdItem.location_img_front.startsWith(
                              'data:image/gif;base64,'
                            ) ||
                            editdItem.location_img_front.startsWith(
                              'data:image/bmp;base64,'
                            )
                              ? editdItem.location_img_front
                              : table.content_url + editdItem.location_img_front
                          }`"
                          style="
                            display: block;
                            width: 120px;
                            border: solid 1px rebeccapurple;
                          "
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageEditL"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة بطاقة السكن الخلفية
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEditLT"
                        style="display: none"
                        ref="fileInputEditLT"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة بطاقة السكن الخلفية"
                        v-model="selectedFileLT"
                        outlined
                        @click="$refs.fileInputEditLT.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="editdItem.location_img_back"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          id="oldL"
                          :src="`${
                            editdItem.location_img_back.startsWith(
                              'data:image/jpeg;base64,'
                            ) ||
                            editdItem.location_img_back.startsWith(
                              'data:image/png;base64,'
                            ) ||
                            editdItem.location_img_back.startsWith(
                              'data:image/gif;base64,'
                            ) ||
                            editdItem.location_img_back.startsWith(
                              'data:image/bmp;base64,'
                            )
                              ? editdItem.location_img_back
                              : table.content_url + editdItem.location_img_back
                          }`"
                          style="
                            display: block;
                            width: 120px;
                            border: solid 1px rebeccapurple;
                          "
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageEditLT"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-col cols="6" md="6">
                      <v-label class="mb-2 font-weight-medium"
                        >صورة الجواز
                      </v-label>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="handleFileChangeEditP"
                        style="display: none"
                        ref="fileInputEditP"
                      />
                      <v-text-field
                        type="text"
                        prepend-icon="mdi-camera"
                        label="صورة الجواز"
                        v-model="selectedFileP"
                        outlined
                        @click="$refs.fileInputEditP.click()"
                        variant="outlined"
                        color="primary"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                      style="text-align: center"
                      v-if="editdItem.passport_img"
                    >
                      <div style="position: relative; display: inline-block">
                        <img
                          id="oldL"
                          :src="
                            editdItem.passport_img.startsWith(
                              'data:image/jpeg;base64,'
                            ) ||
                            editdItem.passport_img.startsWith(
                              'data:image/png;base64,'
                            ) ||
                            editdItem.passport_img.startsWith(
                              'data:image/gif;base64,'
                            ) ||
                            editdItem.passport_img.startsWith(
                              'data:image/bmp;base64,'
                            )
                              ? editdItem.passport_img
                              : table.content_url + editdItem.passport_img
                          "
                          style="
                            display: block;
                            width: 120px;
                            border: solid 1px rebeccapurple;
                          "
                        />
                        <v-icon
                          class="mr-2"
                          color="error"
                          style="
                            position: absolute;
                            top: 0;
                            right: 0;
                            cursor: pointer;
                          "
                          @click="removeImageEditP"
                        >
                          mdi-close
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <br />
              <v-divider></v-divider>
              <!----Personal Info---->
              <v-card-actions>
                <v-btn
                  size="large"
                  @click="editItemConfirm"
                  :loading="editItemLoading"
                  :disabled="!isFormvalid"
                  color="primary"
                  type="submit"
                  text
                  >تعديل</v-btn
                >
                <v-btn color="primary" text @click="dialogEdit = false">
                  الغاء
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- End edit dailog -->

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false">
            تم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذا الحساب ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false">
            الغاء
          </v-btn>
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

    <!-- disable dialog -->
    <v-dialog v-model="dialogDisable" max-width="500px">
      <v-card>
        <v-card-title
          class="headline justify-center"
          v-if="disableItem.is_disabled == false"
        >
          هل انت متأكد من أيقاف هذا الحساب ؟
        </v-card-title>
        <v-card-title class="headline justify-center" v-else>
          هل انت متأكد من تفعيل هذا الحساب ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDisable = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="disableItemLoading"
            @click="disableItemConfirm"
          >
            <span v-if="disableItem.is_disabled == false">أيقاف</span>
            <span v-else>تفعيل</span>
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End disable dailog -->
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
        title: "الملاك",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الملاك",
          disabled: true,
        },
      ],
      // nav
      // showImg
      showImg: {
        open: false,
        color: "primary",
        dataImg: null,
      },
      // showImg

      // table
      is_deleted: false,
      items: [
        { text: "مفعل", value: false },
        { text: "معطل", value: true },
      ],
      table: {
        search: "",
        content_url: null,
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "أسم المستخدم", value: "name" },
          { text: "البريد الألكتروني", value: "email" },
          { text: "كلمة المرور", value: "password_show" },
          { text: "رقم الهاتف", value: "phone" },
          { text: "العنوان", value: "address" },
          { text: "الصورة الشخصية", value: "image" },
          { text: "أسم النموذج", value: "form_name" },
          { text: "رقم المنزل", value: "house_name" },
          { text: "العمليات", value: "actions" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
      },
      // table
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
      // add
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      building_type: null,
      HousesShow: false,
      Forms: [],
      Houses: [],
      selectedFile: null,
      selectedFileT: null,
      selectedFileL: null,
      selectedFileLT: null,
      selectedFileP: null,
      menu: false,
      menuCard: false,
      menuCardE: false,
      menuE: false,
      activePicker: null,
      selectedFiles: [],
      BankAccounts: [],
      data: {
        contract_imgs: [],
        name: null,
        email: null,
        residence_card_issue_date: null,
        phone: null,
        id_number: null,
        id_place_of_issue: null,
        id_issue_date: null,
        residence_card_number: null,
        residence_card_place_of_issue: null,
        owner_title_jop: null,
        password_show: null,
        address: null,
        bank_id: null,
        form: null,
        form_id: null,
        house_id: null,
        id_img_front: null,
        id_img_back: null,
        location_img_front: null,
        location_img_back: null,
        passport_img: null,
      },
      Rules: {
        nameRules: [(v) => !!v || "يرجى إدخال اسم المستخدم"],
        form_id: [(v) => !!v || "الحقل مطلوب"],
        id_number: [(v) => !!v || "الحقل مطلوب"],
        id_place_of_issue: [(v) => !!v || "الحقل مطلوب"],
        id_issue_date: [(v) => !!v || "الحقل مطلوب"],
        residence_card_issue_date: [(v) => !!v || "الحقل مطلوب"],
        residence_card_number: [(v) => !!v || "الحقل مطلوب"],
        bank: [(v) => !!v || "الحقل مطلوب"],
        residence_card_place_of_issue: [(v) => !!v || "الحقل مطلوب"],
        owner_title_jop: [(v) => !!v || "الحقل مطلوب"],
        house_id_rules: [(v) => !!v || "الحقل مطلوب"],
        emailRules: [
          (v) => !!v || "يرجى إدخال عنوان البريد الإلكتروني",
          (v) => /.+@.+\..+/.test(v) || "يرجى إدخال عنوان بريد إلكتروني صحيح",
        ],
        password_showRules: [
          (v) => !!v || "يرجى إدخال كلمة المرور",
          (v) =>
            (v && v.length >= 8) ||
            "يجب أن تكون كلمة المرور أكثر من ثمانية أحرف",
          (v) => /\d/.test(v) || "يجب أن تحتوي كلمة المرور على أرقام",
          (v) => /[a-zA-Z]/.test(v) || "يجب أن تحتوي كلمة المرور على حروف",
        ],
        phoneRules: [
          (v) => !!v || "يرجى إدخال رقم الهاتف",
          (v) =>
            (v && /^[0-9]{11}$/.test(v)) ||
            "يرجى إدخال رقم هاتف صحيح (11 أرقام)",
        ],
        addressRules: [(v) => !!v || "يرجى إدخال عنوان المستخدم"],
      },
      // add
      // edit
      old_image: null,
      dataEdit: null,
      editItemLoading: false,
      dialogEdit: false,
      editdItem: {},
      // edit
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
      // disableItem
      disableItemLoading: false,
      dialogDisable: false,
      disableItem: {},
      // disableItem
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("user"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.getCenter();
    this.getBankAccounts();
    this.getForms();
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
    "data.form": {
      handler: function () {
        this.getHouses();
      },
      deep: true,
    },
    "editdItem.form_id": {
      handler: function (newVal) {
        this.getHousesEdit(newVal);
      },
      deep: true,
    },
    is_deleted: {
      handler: function () {
        this.getCenter();
      },
      deep: true,
    },
  },
  computed: {
    filteredHouses() {
      return this.Houses.filter((House) => House.status !== "تم البيع");
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    saveE(date) {
      this.$refs.menuE.save(date);
    },
    getItemText(item) {
      if (item.building_type === "شقق") {
        return `${item.exact_apartment_building} - ${item.name}`;
      }
      return item.name;
    },
    Print(item) {
      localStorage.setItem("PrintOwner", JSON.stringify(item));
      window.open("/Print-Owner", "_blank");
    },
    getHousesEdit() {
      if (
        typeof this.editdItem.form_id === "object" &&
        !Array.isArray(this.editdItem.form_id)
      ) {
        this.editdItem.form_id = this.editdItem.form_id._id;
      }
      for (var i = 0; i < this.Forms.length; i++) {
        if (this.Forms[i]._id == this.editdItem.form_id) {
          this.building_type = this.Forms[i].building_type;
          this.Houses = this.Forms[i].houses;
        }
      }
    },
    async getForms() {
      try {
        const response = await API.getFormsSelect();

        this.Forms = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    getHouses() {
      this.data.form_id = this.data.form._id;
      this.Houses = this.data.form.houses;
      this.building_type = this.data.form.building_type;
      this.HousesShow = true;
    },
    formatHouse(item) {
      if (this.building_type == "شقق") {
        return `الطابق  ( ${item.apartment_floor_number} ) شقة ( ${item.name} )  الحالة (${item.status})`;
      } else if (this.building_type == "منازل") {
        return `منزل ( ${item.name} ) الحالة  (${item.status})`;
      }
    },
    showImgs(item) {
      this.showImg.open = true;
      this.showImg.dataImg = item;
    },

    handleFileChange(event) {
      this.selectedFiles = [];
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = (e) => {
          this.data.contract_imgs = this.data.contract_imgs || [];
          this.data.contract_imgs.push(e.target.result);
          this.selectedFiles.push({
            file: file,
            base64: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.selectedFiles.splice(index, 1);
    },
    handleFileChangeEdit(event) {
      this.selectedFiles = [];
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = (e) => {
          this.editdItem.image = this.editdItem.image || [];
          this.editdItem.contract_imgs.push(e.target.result);
          this.selectedFiles.push({
            file: file,
            base64: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    },
    removeImageEdit(index) {
      this.editdItem.contract_imgs.splice(index, 1);
    },

    handleFileChangeIDO(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.id_img_front = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageIDO() {
      this.data.id_img_front = null;

      if (this.selectedFile) {
        this.selectedFile = null;
      }
    },
    handleFileChangeEditIDO(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.editdItem.id_img_front = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageEditIDO() {
      this.editdItem.id_img_front = null;

      if (this.selectedFile) {
        this.selectedFile = null;
      }
    },

    handleFileChangeIDT(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.id_img_back = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageIDT() {
      this.data.id_img_back = null;

      if (this.selectedFileT) {
        this.selectedFileT = null;
      }
    },
    handleFileChangeEditIDT(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.editdItem.id_img_back = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageEditIDT() {
      this.editdItem.id_img_back = null;

      if (this.selectedFileT) {
        this.selectedFileT = null;
      }
    },

    handleFileChangeL(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.location_img_front = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageL() {
      this.data.location_img_front = null;

      if (this.selectedFileL) {
        this.selectedFileL = null;
      }
    },
    handleFileChangeEditL(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.editdItem.location_img_front = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageEditL() {
      this.editdItem.location_img_front = null;

      if (this.selectedFileL) {
        this.selectedFileL = null;
      }
    },

    handleFileChangeLT(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.location_img_back = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageLT() {
      this.data.location_img_back = null;

      if (this.selectedFileLT) {
        this.selectedFileLT = null;
      }
    },
    handleFileChangeEditLT(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.editdItem.location_img_back = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageEditLT() {
      this.editdItem.location_img_back = null;

      if (this.selectedFileLT) {
        this.selectedFileLT = null;
      }
    },

    handleFileChangeP(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.passport_img = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageP() {
      this.data.passport_img = null;

      if (this.selectedFileP) {
        this.selectedFileP = null;
      }
    },
    handleFileChangeEditP(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.editdItem.passport_img = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImageEditP() {
      this.editdItem.passport_img = null;

      if (this.selectedFileP) {
        this.selectedFileP = null;
      }
    },

    async getCenter() {
      try {
        this.table.loading = true;
        const key =
          this.tableOptions.sortBy.length > 0
            ? this.tableOptions.sortBy[0]
            : "createdAt";
        const order =
          this.tableOptions.sortDesc.length > 0
            ? this.tableOptions.sortDesc[0]
              ? "desc"
              : "asc"
            : "desc";

        const sortByJSON = JSON.stringify({ key, order });

        var { page, itemsPerPage } = this.tableOptions;
        if (itemsPerPage == -1) {
          itemsPerPage = this.table.totalItems;
        }
        const response = await API.getOwners({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_deleted: this.is_deleted,
        });
        this.table.centers = response.data.results.data;
        this.table.totalItems = response.data.results.count;
        this.table.content_url = response.data.content_url;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },

    async getBankAccounts() {
      try {
        const response = await API.getBankAccounts({
          page: 1,
          limit: 10000000000,
          sortBy: '{"key": "createdAt", "order": "desc"}',
          search: null,
          is_deleted: false,
        });
        this.BankAccounts = response.data.results.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    async addCenter(event) {
      event.preventDefault();

      this.addBtnLoading = true;
      try {
        const response = await API.addOwners({
          name: this.data.name,
          phone: this.data.phone,
          password_show: this.data.password_show,
          email: this.data.email,
          address: this.data.address,
          form_id: this.data.form_id,
          house_id: this.data.house_id,
          contract_imgs: this.data.contract_imgs,
          id_img_front: this.data.id_img_front,
          id_img_back: this.data.id_img_back,
          location_img_front: this.data.location_img_front,
          location_img_back: this.data.location_img_back,
          passport_img: this.data.passport_img,
          id_number: this.data.id_number,
          id_place_of_issue: this.data.id_place_of_issue,
          id_issue_date: this.data.id_issue_date,
          bank_id: this.data.bank_id,
          residence_card_number: this.data.residence_card_number,
          residence_card_issue_date:
            this.data.residence_card_issue_date,
          residence_card_place_of_issue:
            this.data.residence_card_place_of_issue,
          owner_title_jop: this.data.owner_title_jop,
        });

        this.addBtnLoading = false;
        this.data.name = null;
        this.data.email = null;
        this.data.phone = null;
        this.data.password_show = null;
        this.data.address = null;
        this.data.form_id = null;
        this.data.house_id = null;
        this.data.contract_imgs = [];
        this.data.id_img_front = null;
        this.data.id_img_back = null;
        this.data.location_img_front = null;
        this.data.location_img_back = null;
        this.data.passport_img = null;
        this.data.id_number = null;
        this.data.id_place_of_issue = null;
        this.data.bank_id = null;
        this.data.residence_card_issue_date = null;
        this.data.id_issue_date = null;
        this.data.residence_card_number = null;
        this.data.residence_card_place_of_issue = null;
        this.data.owner_title_jop = null;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
        this.dialog = false;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
          this.addBtnLoading = false;
        } else if (error.response.status === 400) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    editItem(item) {
      this.$nextTick(() => {
        this.editdItem = { ...item };
        if (item.contract_imgs) {
          const img = [...item.contract_imgs];
          this.editdItem.contract_imgs = img;
        } else {
          this.editdItem.contract_imgs = [];
        }
        this.dialogEdit = true;
      });
    },

    async editItemConfirm(event) {
      event.preventDefault();

      this.editItemLoading = true;
      try {
        const response = await API.editOwners({
          owner_id: this.editdItem._id,
          name: this.editdItem.name,
          phone: this.editdItem.phone,
          password_show: this.editdItem.password_show,
          email: this.editdItem.email,
          address: this.editdItem.address,
          form_id: this.editdItem.form_id,
          house_id: this.editdItem.house_id,
          contract_imgs: this.editdItem.contract_imgs,
          id_img_front: this.editdItem.id_img_front,
          id_img_back: this.editdItem.id_img_back,
          location_img_front: this.editdItem.location_img_front,
          location_img_back: this.editdItem.location_img_back,
          passport_img: this.editdItem.passport_img,
          id_number: this.editdItem.id_number,
          bank_id: this.editdItem.bank_id,
          residence_card_issue_date:
            this.editdItem.residence_card_issue_date,
          id_place_of_issue: this.editdItem.id_place_of_issue,
          id_issue_date: this.editdItem.id_issue_date,
          residence_card_number: this.editdItem.residence_card_number,
          residence_card_place_of_issue:
            this.editdItem.residence_card_place_of_issue,
          owner_title_jop: this.editdItem.owner_title_jop,
        });
        this.editItemLoading = false;
        this.getCenter();

        this.showDialogfunction(response.data.message, "primary");
        this.dialogEdit = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    disable(item) {
      this.disableItem = { ...item };
      this.dialogDisable = true;
    },
    async disableItemConfirm() {
      var is_disabled = null;
      if (this.disableItem.is_disabled == true) {
        is_disabled = false;
      } else {
        is_disabled = true;
      }
      this.disableItemLoading = true;
      try {
        const response = await API.disableOwners({
          id: this.disableItem._id,
          disable: is_disabled,
        });

        this.disableItemLoading = false;
        this.dialogDisable = false;
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
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeOwners(this.deletedItem._id);

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

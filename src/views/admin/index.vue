<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
      @console-click="handleConsoleClick"
    ></BaseBreadcrumb>
    <v-container>
      <v-row style="justify-content: center">
        <v-col cols="12" md="3" class="1 ww">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/sales-marketing.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد موظفين المبيعات <br />(
                {{ data.allSalesEmployee }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="2 ww">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/phone.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد استفسارات الزبائن <br />(
                {{ data.allCallCenter }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="3 ww">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/request.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد أستمارات طلب حجز وحدة سكنية (
                {{ data.allApplicationForm }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="4 ww">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/application-architecture.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد أستمارات طلب موافقة <br />(
                {{ data.allConfirmationsForm }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="5 ww">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/communications.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد طلبات الوحدات السكنية <br />(
                {{ data.allReservations }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/maintenance.png"
                style="width: 35px"
              /><br />
              <strong>عدد عقود المبيعات <br />( لا يوجد )</strong>
            </v-card-text>
          </v-card>
        </v-col> -->
        <v-col cols="12" md="3" class="6 ww">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/rent.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد وحدات الأيجار <br />( {{ data.allHousesRent }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="7 ww">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/sold.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد الوحدات السكنية المباعة <br />(
                {{ data.allHousesSelling }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <hr />
      <v-row style="justify-content: center">
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/house-owner.png"
                style="width: 35px"
              /><br />
              <strong>عدد الملاك <br />( {{ data.allOwners }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/visitors.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد زوار الملاك <br />( {{ data.allOwnersVisits }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <hr />
      <v-row style="justify-content: center">
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/maintenance.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد خدمات الصيانة <br />(
                {{ data.AllServicesMaintenance }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/delivery-truck.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد خدمات الشحن <br />(
                {{ data.AllServicesThatShipping }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/ads.png"
                style="width: 35px"
              /><br />
              <strong>عدد الأعلانات <br />( {{ data.allAds }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/new-features.png"
                style="width: 35px"
              /><br />
              <strong>عدد المميزات <br />( {{ data.allAdvantages }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/staff.png"
                style="width: 35px"
              /><br />
              <strong>عدد الموظفين <br />( {{ data.allEmployee }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/policeman.png"
                style="width: 35px"
              /><br />
              <strong>عدد الحراس <br />( {{ data.allGuards }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/reserve.png"
                style="width: 35px"
              /><br />
              <strong
                >عدد حجوزات الخدمات <br />
                ( {{ data.allReservationsInServices }} )</strong
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card elevation="16" :loading="loading" outlined shaped>
            <v-card-text style="text-align: center">
              <img
                src="@/assets/images/icon/team.png"
                style="width: 35px"
              /><br />
              <strong>عدد المستخدمين <br />( {{ data.allUsers }} )</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div id="help" class="modal">
      <div class="he" style="padding: 10px">
        <v-btn
          color="rgb(251 151 120)"
          density="comfortable"
          variant="plain"
          @click="closeEvent"
        >
          <v-icon size="20" color="white">mdi-close-box</v-icon>
        </v-btn>
      </div>
      <div id="bod">
        <video width="400" autoplay muted playsinline>
          <source src="@/assets/video/1.webm" type="video/webm" />
          <source src="@/assets/video/1.webm" type="video/ogg" />
        </video>
        <div class="wil">
          <h3 style="text-align: center; padding: 20px">
            <span id="typed-text"></span>
          </h3>
          <div id="buttons" style="text-align: center; display: none">
            <div
              style="
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: row;
              "
            >
              <v-btn @click="startAction" v-if="!start">ابدأ</v-btn>
              <v-btn @click="startAction" v-else>التالي</v-btn>
              <v-btn @click="cancelAction">إلغاء</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";
import Typed from "typed.js";

export default {
  data() {
    return {
      // nav
      page: {
        title: "الصفحة الرئيسية",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: true,
        },
      ],
      // nav
      typed: null,
      loading: false,
      data: {},
      start: false,
      num: 0,
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    handleConsoleClick() {
      const help = document.getElementById("help");
      help.style.display = "block";
      setTimeout(() => {
        help.style.opacity = "1";
      }, 10);
      setTimeout(() => {
        const options = {
          strings: [
            "مرحبا بك في المساعد الذكي",
            "سوف اقوم بشرح تفاصيل الصفحة الرئيسية",
            "هل انت مستعد ؟",
          ],
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 1000,
          startDelay: 500,
          loop: false,
          showCursor: true,
          cursorChar: "|",
          onComplete: () => {
            document.getElementById("buttons").style.display = "block";
          },
        };

        if (this.typed) {
          this.typed.destroy();
        }

        this.typed = new Typed("#typed-text", options);
      }, 1000);
    },
    startAction() {
      const bod = document.getElementById("bod");
      bod.classList.add("bod");
      this.start = true;
      this.num += 1;

      if (this.num == 1) {
        setTimeout(() => {
          const options = {
            strings: [
              "في هذا الكارت يتم عرض عدد موظفين المبيعات الذين تم ادخالهم في قائمة موظفين المبيعات والذين هم فعالين ",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
              document.getElementById("buttons").style.display = "block";
            },
          };

          if (this.typed) {
            this.typed.destroy();
          }

          this.typed = new Typed("#typed-text", options);
        }, 1000);
      } else if(this.num == 2) {
        setTimeout(() => {
          const options = {
            strings: [
              "في هذا الكارت يتم عرض عدد استفسارات الزبائن  ",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
              document.getElementById("buttons").style.display = "block";
            },
          };

          if (this.typed) {
            this.typed.destroy();
          }

          this.typed = new Typed("#typed-text", options);
        }, 1000);
      } else if(this.num == 3) {
        setTimeout(() => {
          const options = {
            strings: [
              "في هذا الكارت يتم عرض عدد استمارات طلب حجز وحدة سكنية",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
              document.getElementById("buttons").style.display = "block";
            },
          };

          if (this.typed) {
            this.typed.destroy();
          }

          this.typed = new Typed("#typed-text", options);
        }, 1000);
      } else if(this.num == 4) {
        setTimeout(() => {
          const options = {
            strings: [
              "في هذا الكارت يتم عرض عدد استمارات طلب موافقة",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
              document.getElementById("buttons").style.display = "block";
            },
          };

          if (this.typed) {
            this.typed.destroy();
          }

          this.typed = new Typed("#typed-text", options);
        }, 1000);
      } else if(this.num == 5) {
        setTimeout(() => {
          const options = {
            strings: [
              "في هذا الكارت يتم عرض عدد طلبات الوحدة السكنية",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
              document.getElementById("buttons").style.display = "block";
            },
          };

          if (this.typed) {
            this.typed.destroy();
          }

          this.typed = new Typed("#typed-text", options);
        }, 1000);
      } else if(this.num == 6) {
        setTimeout(() => {
          const options = {
            strings: [
              "في هذا الكارت يتم عرض عدد الوحدات السكنية المخصصة للايجار",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
              document.getElementById("buttons").style.display = "block";
            },
          };

          if (this.typed) {
            this.typed.destroy();
          }

          this.typed = new Typed("#typed-text", options);
        }, 1000);
      } else if(this.num == 7) {
        setTimeout(() => {
          const options = {
            strings: [
              "في هذا الكارت يتم عرض عدد الوحدات السكنية التي تم بيعها",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
              document.getElementById("buttons").style.display = "block";
            },
          };

          if (this.typed) {
            this.typed.destroy();
          }

          this.typed = new Typed("#typed-text", options);
        }, 1000);
      }
      var wwElements = document.getElementsByClassName("ww");
      for (var i = 0; i < wwElements.length; i++) {
        wwElements[i].style.zIndex = "";
      }

      var n = document.getElementsByClassName(this.num);
      if (n.length > 0) {
        n[0].style.zIndex = 1000;
      }

      console.log("بدأت العملية");
    },
    cancelAction() {
      console.log("تم إلغاء العملية");
      const help = document.getElementById("help");
      help.style.opacity = "0";
      setTimeout(() => {
        help.style.display = "none";
      }, 500);

      document.getElementById("buttons").style.display = "none";
      if (this.typed) {
        this.typed.destroy();
        this.typed = null;
      }
    },
    closeEvent() {
      const help = document.getElementById("help");
      help.style.opacity = "0";
      setTimeout(() => {
        help.style.display = "none";
      }, 500);
      document.getElementById("buttons").style.display = "none";

      if (this.typed) {
        this.typed.destroy();
        this.typed = null;
      }
    },
    async getCenter() {
      try {
        this.loading = true;

        const response = await API.getCounts();

        this.loading = false;

        this.data = response.data.results;
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
  },
  beforeDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  },
};
</script>
<style>
#help {
  display: none;
  width: 100%;
  height: 100%;
  background-color: #0000008c;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 100;
}
#bod {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bod {
  width: 100% !important;
  height: 100% !important;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: column !important;
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: row !important;
}
video {
  background: none;
  outline: none;
  border: none;
}
.modal {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.wil {
  width: 75%;
  /* height: 183px; */
  background-color: white;
  padding: 10px;
  border-radius: 10px 10px 10px 10px;
}
video::-webkit-media-controls {
  display: none !important;
}

video::-moz-media-controls {
  display: none !important;
}

video::-ms-media-controls {
  display: none !important;
}

video::-o-media-controls {
  display: none !important;
}

video::media-controls {
  display: none !important;
}
</style>

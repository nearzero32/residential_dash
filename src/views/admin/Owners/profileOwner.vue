<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <div class="mt-4" v-if="data">
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <div>
                <strong>أسم المالك : {{ data.name }}</strong>
                <br />
                <strong>رقم الهاتف : {{ data.phone }}</strong>
              </div>
            </v-col>
            <v-col cols="12" md="6" id="ImgO">
              <div>
                <img
                  v-if="data.image"
                  style="width: 55px"
                  :src="content_url + data.image"
                  :alt="data.name"
                />
                <div v-else>لا توجد صورة شخصية</div>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <hr />
        <v-card-text
          style="display: flex; flex-direction: column; align-items: flex-start"
        >
          <h4>تفاصيل المالك :-</h4>
          <br />
          <h4>البريد الألكتروني : {{ data.email }}</h4>
          <br />
          <h4>العنوان : {{ data.address }}</h4>
          <br />
          <h4>كلمة المرور : {{ data.password_show }}</h4>
          <br />
          <h4>رقم الهوية : {{ data.id_number }}</h4>
          <br />
          <h4>جهة اصدار الهوية : {{ data.id_place_of_issue }}</h4>
          <br />
          <h4>تاريخ اصدار الهوية : {{ data.id_issue_date }}</h4>
          <br />
          <h4>رقم بطاقة السكن : {{ data.residence_card_number }}</h4>
          <br />
          <h4>
            جهة اصدار بطاقة السكن : {{ data.residence_card_place_of_issue }}
          </h4>
          <br />
          <h4>العنوان الوظيفي : {{ data.owner_title_jop }}</h4>
          <br />
          <div style="width: 100%">
            <h4><strong>صور العقد :</strong></h4>
            <v-row v-if="data.contract_imgs" style="margin: 0px">
              <v-col
                cols="12"
                md="3"
                v-for="(img, index) in data.contract_imgs"
                :key="index"
              >
                <img
                  :src="content_url + img"
                  style="width: 40%; height: auto"
                  alt="صورة عقد"
                />
              </v-col>
            </v-row>
            <div v-else>لا يوجد</div>
          </div>
          <br />
          <div style="width: 100%">
            <v-row style="margin: 0px">
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4><strong>صور الهوية :</strong></h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.id_img_front"
                        :src="content_url + data.id_img_front"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الهوية"
                      />
                      <div v-else style="margin-inline: 10px">لا يوجد</div>
                      <img
                        v-if="data.id_img_back"
                        :src="content_url + data.id_img_back"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الهوية"
                      />
                      <div v-else style="margin-inline: 10px">لا يوجد</div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4><strong>صور بطاقة السكن :</strong></h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.location_img_front"
                        :src="content_url + data.location_img_front"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صور بطاقة السكن"
                      />
                      <div v-else style="margin-inline: 10px">لا يوجد</div>
                      <img
                        v-if="data.location_img_back"
                        :src="content_url + data.location_img_back"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صور بطاقة السكن"
                      />
                      <div v-else style="margin-inline: 10px">لا يوجد</div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4><strong>صورة الجواز :</strong></h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.passport_img"
                        :src="content_url + data.passport_img"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الجواز"
                      />
                      <div v-else style="margin-inline: 10px">لا يوجد</div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
            </v-row>
          </div>
          <br />
        </v-card-text>
      </v-card>
      <br />
      <VCard class="mb-6">
        <VCardTitle style="text-align: center">{{
          t("Operations")
        }}</VCardTitle>
        <VCardText>
          <VRow style="justify-content: space-between">
            <VCol cols="12" md="3" style="text-align: center">
              <VBtn
                tile
                color="primary"
                prepend-icon="mdi-plus"
                @click="addDialog.open = true"
                v-if="userData.includes('add')"
              >
                {{ t("Add Another Owner") }}
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
      <br />
      <VCard v-if="table.Data.length > 0">
        <VCardTitle>
          <VRow
            justify="space-between"
            style="align-items: center; margin-bottom: 15px"
          >
            <VCol cols="12" sm="12" md="12">
              <VTextField
                v-model="table.search"
                append-inner-icon="mdi-magnify"
                density="compact"
                :label="t('Search')"
                variant="solo"
                hide-details
                single-line
                clearable
              />
            </VCol>
          </VRow>
        </VCardTitle>
        <VCardText>
          <v-data-table
            :items="table.Data"
            :loading="table.loading"
            :headers="headers"
            :search="table.search"
          >
            <template #item.id_img_back="{ item }">
              <img
                v-if="item.selectable.id_img_back"
                class="teacher_image_table"
                :src="content_url + item.selectable.id_img_back"
                alt
                width="50"
                height="50"
                @click="showImage(item.selectable.id_img_back)"
              />
            </template>
            <template #item.id_img_front="{ item }">
              <img
                v-if="item.selectable.id_img_front"
                class="teacher_image_table"
                :src="content_url + item.selectable.id_img_front"
                alt
                width="50"
                height="50"
                @click="showImage(item.selectable.id_img_front)"
              />
            </template>
            <template #item.location_img_back="{ item }">
              <img
                v-if="item.selectable.location_img_back"
                class="teacher_image_table"
                :src="content_url + item.selectable.location_img_back"
                alt
                width="50"
                height="50"
                @click="showImage(item.selectable.location_img_back)"
              />
            </template>
            <template #item.location_img_front="{ item }">
              <img
                v-if="item.selectable.location_img_front"
                class="teacher_image_table"
                :src="content_url + item.selectable.location_img_front"
                alt
                width="50"
                height="50"
                @click="showImage(item.selectable.location_img_front)"
              />
            </template>
            <template #item.passport_img="{ item }">
              <img
                v-if="item.selectable.passport_img"
                class="teacher_image_table"
                :src="content_url + item.selectable.passport_img"
                alt
                width="50"
                height="50"
                @click="showImage(item.selectable.passport_img)"
              />
            </template>
            <template #item.actions="{ item }">
              <VTooltip bottom v-if="userData.includes('remove')">
                <template v-slot:activator="{ props }">
                  <VIcon
                    style="margin-inline: 3px"
                    color="#FF5252"
                    v-bind="props"
                    size="20"
                    v-on="on"
                    @click="emitDisable(item.selectable)"
                  >
                    fa-trash
                  </VIcon>
                </template>
                <span>حذف</span>
              </VTooltip>
              <VTooltip bottom v-if="userData.includes('edit')">
                <template v-slot:activator="{ props }">
                  <VIcon
                    style="margin-inline: 3px"
                    color="primary"
                    class="ml-2"
                    v-bind="props"
                    size="20"
                    v-on="on"
                    @click="editItem(item.selectable)"
                  >
                    fa-edit
                  </VIcon>
                </template>
                <span>تعديل</span>
              </VTooltip>
            </template>
          </v-data-table>
        </VCardText>
      </VCard>
    </div>

    <!-- Add Class Dialog -->
    <VDialog v-model="addDialog.open" max-width="800px">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Addition") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAdd.name"
                    :rules="Rules.name"
                    :label="t(`Owner's name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAdd.phone"
                    :rules="Rules.phone"
                    :label="t(`Owner's phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAdd.id_number"
                    :rules="Rules.id_number"
                    :label="t('National Identification Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAdd.id_place_of_issue"
                    :rules="Rules.id_place_of_issue"
                    :label="t('Issuing Authority of the Identification Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VLabel
                    >{{ t("Date of Issuance of the Identification Card") }}
                  </VLabel>
                  <VueDatePicker
                    :format="format"
                    v-model="dataAdd.id_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Identification Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAdd.residence_card_number"
                    :rules="Rules.residence_card_number"
                    :label="t('Residence Card Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAdd.residence_card_place_of_issue"
                    :label="t('Issuing Authority of the Residence Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VLabel
                    >{{ t("Date of Issuance of the Residence Card") }}
                  </VLabel>

                  <VueDatePicker
                    :format="format"
                    v-model="dataAdd.residence_card_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Residence Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAdd.owner_title_jop"
                    :rules="Rules.owner_title_jop"
                    :label="t('Job Title')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Front Side of the ID')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeIDO"
                        @click:clear="
                          file = null;
                          dataAdd.id_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAdd.id_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dataAdd.id_img_front)
                            ? dataAdd.id_img_front
                            : content_url + dataAdd.id_img_front
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Back Side of the ID')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeIDT"
                        @click:clear="
                          file = null;
                          dataAdd.id_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAdd.id_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dataAdd.id_img_back)
                            ? dataAdd.id_img_back
                            : content_url + dataAdd.id_img_back
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Front Side of the Residence Card')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeL"
                        @click:clear="
                          file = null;
                          dataAdd.location_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAdd.location_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dataAdd.location_img_front)
                            ? dataAdd.location_img_front
                            : content_url + dataAdd.location_img_front
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Back Side of the Residence Card')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeLT"
                        @click:clear="
                          file = null;
                          dataAdd.location_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAdd.location_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dataAdd.location_img_back)
                            ? dataAdd.location_img_back
                            : content_url + dataAdd.location_img_back
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Passport Photo')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeP"
                        @click:clear="
                          file = null;
                          dataAdd.passport_img = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAdd.passport_img"
                        style="width: 130px"
                        :src="
                          isBase64(dataAdd.passport_img)
                            ? dataAdd.passport_img
                            : content_url + dataAdd.passport_img
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="addDialog.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="addDialog.saveLoading"
            @click="addCenter"
          >
            {{ t("Addition") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Add Class Dialog -->

    <!-- Edit Class Dialog -->
    <VDialog v-model="dialogEdit.open" max-width="800px" max-height="100%">
      <VCard>
        <VCardTitle>
          <span class="headline">{{ t("Edit") }}</span>
        </VCardTitle>
        <VCardText>
          <VContainer>
            <VForm ref="form">
              <VRow>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEdit.editedItem.name"
                    :rules="Rules.name"
                    :label="t(`Owner's name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEdit.editedItem.phone"
                    :rules="Rules.phone"
                    :label="t(`Owner's phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEdit.editedItem.id_number"
                    :rules="Rules.id_number"
                    :label="t('National Identification Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEdit.editedItem.id_place_of_issue"
                    :rules="Rules.id_place_of_issue"
                    :label="t('Issuing Authority of the Identification Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <Vlabel
                    >{{ t("Date of Issuance of the Identification Card") }}
                  </Vlabel>
                  <VueDatePicker
                    :format="format"
                    v-model="dialogEdit.editedItem.id_issue_date"
                    :rules="Rules.id_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Identification Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEdit.editedItem.residence_card_number"
                    :rules="Rules.residence_card_number"
                    :label="t('Residence Card Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="
                      dialogEdit.editedItem.residence_card_place_of_issue
                    "
                    :label="t('Issuing Authority of the Residence Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <Vlabel
                    >{{ t("Date of Issuance of the Residence Card") }}
                  </Vlabel>
                  <VueDatePicker
                    :format="format"
                    v-model="dialogEdit.editedItem.residence_card_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Residence Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEdit.editedItem.owner_title_jop"
                    :rules="Rules.owner_title_jop"
                    :label="t('Job Title')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Front Side of the ID')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeIDOEdit"
                        @click:clear="
                          file = null;
                          dialogEdit.editedItem.id_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.id_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.id_img_front)
                            ? dialogEdit.editedItem.id_img_front
                            : content_url + dialogEdit.editedItem.id_img_front
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Back Side of the ID')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeIDTEdit"
                        @click:clear="
                          file = null;
                          dialogEdit.editedItem.id_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.id_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.id_img_back)
                            ? dialogEdit.editedItem.id_img_back
                            : content_url + dialogEdit.editedItem.id_img_back
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Front Side of the Residence Card')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeLEdit"
                        @click:clear="
                          file = null;
                          dialogEdit.editedItem.location_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.location_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.location_img_front)
                            ? dialogEdit.editedItem.location_img_front
                            : content_url +
                              dialogEdit.editedItem.location_img_front
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Back Side of the Residence Card')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeLTEdit"
                        @click:clear="
                          file = null;
                          dialogEdit.editedItem.location_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.location_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.location_img_back)
                            ? dialogEdit.editedItem.location_img_back
                            : content_url +
                              dialogEdit.editedItem.location_img_back
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="6">
                      <VFileInput
                        v-model="file"
                        :label="t('Passport Photo')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangePEdit"
                        @click:clear="
                          file = null;
                          dialogEdit.editedItem.passport_img = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEdit.editedItem.passport_img"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEdit.editedItem.passport_img)
                            ? dialogEdit.editedItem.passport_img
                            : content_url + dialogEdit.editedItem.passport_img
                        "
                        alt=""
                        @click.stop
                      />
                    </VCol>
                  </VRow>
                </VCol>
              </VRow>
            </VForm>
          </VContainer>
        </VCardText>
        <VCardActions class="ml-3">
          <VSpacer />
          <VBtn color="primary" text @click="dialogEdit.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="dialogEdit.loading"
            @click="editItemConform"
          >
            {{ t("Edit") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Class Dialog -->

    <!-- Delete Dialog -->
    <VDialog v-model="dialogDelete.open" max-width="500px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("Are you sure you want to delete?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogDelete.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogDelete.loading"
            @click="deleteItemConfirm"
          >
            {{ t("Delete") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Delete Dialog -->

    <!-- Message Dialog -->
    <VDialog v-model="dialogData.open" max-width="500px">
      <VToolbar :color="dialogData.color" dense />
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ dialogData.bodyText }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="primary" text @click="dialogData.open = false">
            {{ t("Finish") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Message Dialog -->
  </div>
</template>

<script>
import adminApi from "@/api/adminApi";
import { useI18n } from "vue-i18n";
import { VDataTable } from "vuetify/labs/VDataTable";

export default {
  components: {
    VDataTable,
  },
  setup() {
    const { t } = useI18n();
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    };
    return {
      format,
      t,
      // nav
      page: {
        title: "Owners",
      },
      b: [
        {
          text: "Home Page",
          disabled: false,
          to: "/admin-index",
        },
        {
          text: "Owners",
          disabled: true,
        },
      ],
      // nav
    };
  },
  data() {
    return {
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      id: JSON.parse(sessionStorage.getItem("pageData"))._id,
      data: JSON.parse(sessionStorage.getItem("pageData")),
      loading: null,
      // table
      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["تعديل", "ايقاف", "طباعة"],
        search: null,
        itemsPerPage: 5,
      },
      userData: [],
      action: [],
      // table

      // add
      addDialog: {
        open: false,
        saveLoading: false,
      },
      dataAdd: {
        name: null,
        residence_card_issue_date: null,
        phone: null,
        id_number: null,
        id_place_of_issue: null,
        id_issue_date: null,
        residence_card_number: null,
        residence_card_place_of_issue: null,
        owner_title_jop: null,
        id_img_front: null,
        id_img_back: null,
        location_img_front: null,
        location_img_back: null,
        passport_img: null,
      },
      // add

      // dialogEdit
      dialogEdit: {
        open: false,
        editedItem: null,
        isFormValid: false,
        loading: false,
      },
      // dialogEdit

      // Delete
      dialogDelete: {
        open: false,
        deletedItem: null,
        loading: false,
      },
      // Delete

      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message
    };
  },
  created() {
    var userDataString = JSON.parse(localStorage.getItem("results"));
    if (userDataString.type !== "admin") {
      this.userData = userDataString.privileges.actions;
    } else {
      this.userData = ["add", "edit", "remove"];
    }
    this.getCenter();
    this.getAnotherOwner();
  },
  computed: {
    Rules() {
      return {
        passport_img: [(value) => !!value || this.t("This field is required")],
        location_img_back: [
          (value) => !!value || this.t("This field is required"),
        ],
        location_img_front: [
          (value) => !!value || this.t("This field is required"),
        ],
        id_img_back: [(value) => !!value || this.t("This field is required")],
        id_img_front: [(value) => !!value || this.t("This field is required")],
        owner_title_jop: [
          (value) => !!value || this.t("This field is required"),
        ],
        residence_card_place_of_issue: [
          (value) => !!value || this.t("This field is required"),
        ],
        residence_card_number: [
          (value) => !!value || this.t("This field is required"),
        ],
        id_issue_date: [(value) => !!value || this.t("This field is required")],
        id_place_of_issue: [
          (value) => !!value || this.t("This field is required"),
        ],
        name: [(value) => !!value || this.t("This field is required")],
        residence_card_issue_date: [
          (value) => !!value || this.t("This field is required"),
        ],
        id_number: [(value) => !!value || this.t("This field is required")],
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11)
              return this.t("Phone number must be 11 digits");
            return true;
          },
        ],
      };
    },
    headers() {
      return [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("Owner's name"),
          type: "strong",
          link: ``,
          key: "name",
        },
        {
          title: this.t("Owner's phone number"),
          type: "strong",
          link: ``,
          key: "phone",
        },
        {
          title: this.t("Front Side of the ID"),
          type: "strong",
          link: ``,
          key: "id_img_front",
        },
        {
          title: this.t("Back Side of the ID"),
          type: "strong",
          link: ``,
          key: "id_img_back",
        },
        {
          title: this.t("Date of Issuance of the Identification Card"),
          type: "strong",
          link: ``,
          key: "id_issue_date",
        },
        {
          title: this.t("Issuing Authority of the Identification Card"),
          type: "strong",
          link: ``,
          key: "id_place_of_issue",
        },
        {
          title: this.t("Front Side of the Residence Card"),
          type: "strong",
          link: ``,
          key: "location_img_front",
        },
        {
          title: this.t("Back Side of the Residence Card"),
          type: "strong",
          link: ``,
          key: "location_img_back",
        },
        {
          title: this.t("Residence Card Number"),
          type: "strong",
          link: ``,
          key: "residence_card_number",
        },
        {
          title: this.t("Issuing Authority of the Residence Card"),
          type: "strong",
          link: ``,
          key: "residence_card_place_of_issue",
        },
        {
          title: this.t("Date of Issuance of the Residence Card"),
          type: "strong",
          link: ``,
          key: "residence_card_issue_date",
        },
        {
          title: this.t("Job Title"),
          type: "strong",
          link: ``,
          key: "owner_title_jop",
        },
        {
          title: this.t("Passport Photo"),
          type: "strong",
          link: ``,
          key: "passport_img",
        },
        {
          title: this.t("Operations"),
          key: "actions",
          sortable: false,
          type: "strong",
          link: "",
        },
      ];
    },
  },
  methods: {
    // Get Data
    async getCenter() {
      try {
        this.loading = true;

        const response = await adminApi.getOneOwner(this.id);
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
    async getAnotherOwner() {
      try {
        const response = await adminApi.getAnotherOwner({ id: this.id });
        this.table.Data = response.data.results;
        console.log(this.table.Data);
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    // Get Data

    // images
    handleFileChangeIDO(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAdd.id_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeIDT(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAdd.id_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeL(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAdd.location_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeLT(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAdd.location_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeP(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAdd.passport_img = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    // Edit
    handleFileChangeIDOEdit(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEdit.editedItem.id_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeIDTEdit(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEdit.editedItem.id_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeLEdit(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEdit.editedItem.location_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeLTEdit(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEdit.editedItem.location_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangePEdit(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEdit.editedItem.passport_img = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    // images

    // Add Data
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;
        try {
          const response = await adminApi.addAnotherOwner({
            owner_id: this.id,
            name: this.dataAdd.name,
            phone: this.dataAdd.phone,
            id_place_of_issue: this.dataAdd.id_place_of_issue,
            id_issue_date: this.dataAdd.id_issue_date,
            residence_card_number: this.dataAdd.residence_card_number,
            residence_card_issue_date: this.dataAdd.residence_card_issue_date,
            residence_card_place_of_issue:
              this.dataAdd.residence_card_place_of_issue,
            owner_title_jop: this.dataAdd.owner_title_jop,
            id_img_front: this.dataAdd.id_img_front,
            id_img_back: this.dataAdd.id_img_back,
            location_img_front: this.dataAdd.location_img_front,
            location_img_back: this.dataAdd.location_img_back,
            passport_img: this.dataAdd.passport_img,
          });

          this.addBtnLoading = false;
          this.dataAdd.name = null;
          this.dataAdd.phone = null;
          this.dataAdd.id_img_front = null;
          this.dataAdd.id_img_back = null;
          this.dataAdd.location_img_front = null;
          this.dataAdd.location_img_back = null;
          this.dataAdd.passport_img = null;
          this.dataAdd.id_place_of_issue = null;
          this.dataAdd.residence_card_issue_date = null;
          this.dataAdd.id_issue_date = null;
          this.dataAdd.residence_card_number = null;
          this.dataAdd.residence_card_place_of_issue = null;
          this.dataAdd.owner_title_jop = null;
          this.addDialog.saveLoading = false;
          await this.getCenter();
          await this.getAnotherOwner();
          this.addDialog.open = false;
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else {
            this.addDialog.saveLoading = false;
          }
        } finally {
          this.addDialog.saveLoading = false;
        }
      }
    },
    // Add Data

    // editItem
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogEdit.loading = true;

        try {
          const response = await adminApi.editAnotherOwner({
            id: this.dialogEdit.editedItem._id,
            owner_id: this.id,
            name: this.dialogEdit.editedItem.name,
            phone: this.dialogEdit.editedItem.phone,
            id_place_of_issue: this.dialogEdit.editedItem.id_place_of_issue,
            id_issue_date: this.dialogEdit.editedItem.id_issue_date,
            residence_card_number:
              this.dialogEdit.editedItem.residence_card_number,
            residence_card_issue_date:
              this.dialogEdit.editedItem.residence_card_issue_date,
            residence_card_place_of_issue:
              this.dialogEdit.editedItem.residence_card_place_of_issue,
            owner_title_jop: this.dialogEdit.editedItem.owner_title_jop,
            id_img_front: this.dialogEdit.editedItem.id_img_front,
            id_img_back: this.dialogEdit.editedItem.id_img_back,
            location_img_front: this.dialogEdit.editedItem.location_img_front,
            location_img_back: this.dialogEdit.editedItem.location_img_back,
            passport_img: this.dialogEdit.editedItem.passport_img,
          });

          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.getCenter();
          this.getAnotherOwner();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogEdit.open = false;
            this.dialogEdit.loading = false;
            this.showDialogfunction(error.response.data.results, "#FF5252");
          }
        } finally {
          this.dialogEdit.loading = false;
        }
      }
    },
    // editItem

    // deleteItem
    emitDisable(item) {
      this.dialogDelete.deletedItem = { ...item };
      this.dialogDelete.open = true;
    },
    async deleteItemConfirm() {
      this.dialogDelete.loading = true;

      try {
        const response = await adminApi.removeAnotherOwner(
          this.dialogDelete.deletedItem._id
        );
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
        this.getCenter();
        this.getAnotherOwner();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      } finally {
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
      }
    },
    // deleteItem

    // message
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    // message
  },
};
</script>

<style>
#ImgO {
  text-align: end;
}

@media only screen and (max-width: 600px) {
  #ImgO {
    text-align: start;
  }
}
</style>

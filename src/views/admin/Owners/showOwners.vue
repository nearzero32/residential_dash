<template>
  <div class="team">
    <BaseBreadcrumb
      :title="t(page.title)"
      :icon="page.icon"
      :breadcrumbs="b.map((crumb) => ({ ...crumb, text: t(crumb.text) }))"
    ></BaseBreadcrumb>
    <br />
    <br />
    <VCard class="mb-6">
      <VCardTitle style="text-align: center">{{ t("Operations") }}</VCardTitle>
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
              {{ t("Addition") }}
            </VBtn>
          </VCol>
          <VCol cols="12" md="3" style="text-align: center">
            <VSelect
              density="compact"
              :items="ownerApartmentType"
              :label="t('select_owner_type')"
              item-title="text"
              item-value="value"
              v-model="is_house_received"
              @update:modelValue="getCenter"
            >
            </VSelect>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
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
              @click:clear="getCenter"
              @input="getCenter"
              clearable
            />
          </VCol>
        </VRow>
      </VCardTitle>
      <VCardText>
        <Table
          :table="table"
          :content_url="content_url"
          :tableOptions="tableOptions"
          :headers="headers"
          @update:options="getCenter"
          @editItems="editItem"
          @emitDisable="emitDisable"
          @emitConfirmReceivedHouse="emitConfirmReceivedHouse"
          @emitPrintItems="printItem"
        />
      </VCardText>
    </VCard>

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
                    v-model="data.name"
                    :rules="Rules.name"
                    :label="t(`Owner's name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="data.email"
                    :rules="Rules.email"
                    :label="t(`Email`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="data.phone"
                    :rules="Rules.phone"
                    :label="t(`Owner's phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.password_show"
                    :rules="Rules.password_show"
                    :label="t('Password')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.id_number"
                    :rules="Rules.id_number"
                    :label="t('National Identification Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.id_place_of_issue"
                    :rules="Rules.id_place_of_issue"
                    :label="t('Issuing Authority of the Identification Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VueDatePicker
                    :format="format"
                    v-model="data.id_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Identification Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.residence_card_number"
                    :rules="Rules.residence_card_number"
                    :label="t('Residence Card Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.residence_card_place_of_issue"
                    :label="t('Issuing Authority of the Residence Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VueDatePicker
                    :format="format"
                    v-model="data.residence_card_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Residence Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.owner_title_jop"
                    :rules="Rules.owner_title_jop"
                    :label="t('Job Title')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="data.address"
                    :rules="Rules.address"
                    :label="t('Address')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="data.bank_id"
                    :rules="Rules.bank_id"
                    :items="BankAccounts"
                    outlined
                    item-title="name"
                    item-value="_id"
                    attach
                    :label="t(`Bank Name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="data.form"
                    :rules="Rules.form"
                    :items="Forms"
                    outlined
                    :item-title="getItemText"
                    item-value="_id"
                    attach
                    return-object
                    @update:modelValue="getHouses"
                    :label="t(`Form name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6" v-if="HousesShow">
                  <VAutocomplete
                    v-model="data.house_id"
                    :rules="Rules.house_id"
                    :items="filteredHouses"
                    outlined
                    :item-title="formatHouse"
                    item-value="_id"
                    attach
                    :label="t(`The house`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="3">
                      <VFileInput
                        multiple
                        v-model="files"
                        :label="t('Contract Photos')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChange"
                        @click:clear="
                          files = [];
                          data.contract_imgs = [];
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="9" v-if="data.contract_imgs.length">
                      <VCard>
                        <VCardText>
                          <v-row>
                            <v-col
                              cols="12"
                              md="2"
                              v-for="(image, index) in data.contract_imgs"
                              :key="index"
                              style="padding: 10px"
                            >
                              <VCard
                                style="position: relative"
                                class="imgI"
                                @mouseover="showDeleteIcon(index)"
                                @mouseleave="hideDeleteIcon(index)"
                              >
                                <img
                                  style="height: 100px; width: 100%"
                                  :src="
                                    isBase64(image)
                                      ? image
                                      : content_url + image
                                  "
                                  alt="Image"
                                  @click.stop
                                />
                                <v-btn
                                  fab
                                  small
                                  color="red"
                                  text
                                  class="delete-icon"
                                  :class="{
                                    visible: visibleDeleteIcons[index],
                                  }"
                                  @click.stop="deleteImage(index)"
                                  style="
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    z-index: 1;
                                    opacity: 0;
                                    transition: opacity 0.3s;
                                    background-color: #faebd700;
                                  "
                                >
                                  <v-icon
                                    color="red"
                                    size="30"
                                    style="color: red"
                                    >mdi-delete</v-icon
                                  >
                                </v-btn>
                              </VCard>
                            </v-col>
                          </v-row>
                        </VCardText>
                      </VCard>
                    </VCol>
                  </VRow>
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
                          data.id_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.id_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(data.id_img_front)
                            ? data.id_img_front
                            : content_url + data.id_img_front
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
                          data.id_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.id_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(data.id_img_back)
                            ? data.id_img_back
                            : content_url + data.id_img_back
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
                          data.location_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.location_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(data.location_img_front)
                            ? data.location_img_front
                            : content_url + data.location_img_front
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
                          data.location_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.location_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(data.location_img_back)
                            ? data.location_img_back
                            : content_url + data.location_img_back
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
                          data.passport_img = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="data.passport_img"
                        style="width: 130px"
                        :src="
                          isBase64(data.passport_img)
                            ? data.passport_img
                            : content_url + data.passport_img
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
                    v-model="dialogEdit.editedItem.email"
                    :rules="Rules.email"
                    :label="t(`Email`)"
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
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.password_show"
                    :rules="Rules.password_show"
                    :label="t('Password')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.id_number"
                    :rules="Rules.id_number"
                    :label="t('National Identification Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.id_place_of_issue"
                    :rules="Rules.id_place_of_issue"
                    :label="t('Issuing Authority of the Identification Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VueDatePicker
                    :format="format"
                    v-model="dialogEdit.editedItem.id_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Identification Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.residence_card_number"
                    :rules="Rules.residence_card_number"
                    :label="t('Residence Card Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="
                      dialogEdit.editedItem.residence_card_place_of_issue
                    "
                    :label="t('Issuing Authority of the Residence Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
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
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.owner_title_jop"
                    :rules="Rules.owner_title_jop"
                    :label="t('Job Title')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="dialogEdit.editedItem.address"
                    :rules="Rules.address"
                    :label="t('Address')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.bank_id"
                    :rules="Rules.bank_id"
                    :items="BankAccounts"
                    outlined
                    item-title="name"
                    item-value="_id"
                    attach
                    :label="t(`Bank Name`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.form_id"
                    :rules="Rules.form"
                    :items="Forms"
                    outlined
                    :item-title="
                      (item) =>
                        item.exact_apartment_building
                          ? `${item.exact_apartment_building} - ${item.name}`
                          : item.name
                    "
                    item-value="_id"
                    attach
                    @update:modelValue="
                      (value) => {
                        const selectedItem = Forms.find(
                          (item) => item._id === value
                        );
                        getHousesEdit(selectedItem);
                      }
                    "
                    :label="t('Form name')"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="6">
                  <VAutocomplete
                    v-model="dialogEdit.editedItem.house_id"
                    :rules="Rules.house_id"
                    :items="Houses"
                    outlined
                    :item-title="formatHouse"
                    item-value="_id"
                    attach
                    :label="t(`The house`)"
                  ></VAutocomplete>
                </VCol>
                <VCol cols="12" md="12">
                  <VRow>
                    <VCol cols="12" md="3">
                      <VFileInput
                        multiple
                        v-model="files"
                        :label="t('Contract Photos')"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera-outline"
                        @change="handleFileChangeEdit"
                        @click:clear="
                          files = [];
                          dialogEdit.editedItem.contract_imgs = [];
                        "
                      />
                    </VCol>
                    <VCol
                      cols="12"
                      md="9"
                      v-if="dialogEdit.editedItem.contract_imgs.length"
                    >
                      <VCard>
                        <VCardText>
                          <v-row>
                            <v-col
                              cols="12"
                              md="2"
                              v-for="(image, index) in dialogEdit.editedItem
                                .contract_imgs"
                              :key="index"
                              style="padding: 10px"
                            >
                              <VCard
                                style="position: relative"
                                class="imgI"
                                @mouseover="showDeleteIcon(index)"
                                @mouseleave="hideDeleteIcon(index)"
                              >
                                <img
                                  style="height: 100px; width: 100%"
                                  :src="
                                    isBase64(image)
                                      ? image
                                      : content_url + image
                                  "
                                  alt="Image"
                                  @click.stop
                                />
                                <v-btn
                                  fab
                                  small
                                  color="red"
                                  text
                                  class="delete-icon"
                                  :class="{
                                    visible: visibleDeleteIcons[index],
                                  }"
                                  @click.stop="deleteImageEdit(index)"
                                  style="
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    z-index: 1;
                                    opacity: 0;
                                    transition: opacity 0.3s;
                                    background-color: #faebd700;
                                  "
                                >
                                  <v-icon
                                    color="red"
                                    size="30"
                                    style="color: red"
                                    >mdi-delete</v-icon
                                  >
                                </v-btn>
                              </VCard>
                            </v-col>
                          </v-row>
                        </VCardText>
                      </VCard>
                    </VCol>
                  </VRow>
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
          {{ t("Are you sure you want to deactivate this account?") }}
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
            {{ t("Deactivate") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Delete Dialog -->

    <!-- receive house Dialog -->
    <VDialog v-model="dialogReceivedHouse.open" max-width="600px">
      <VCard>
        <VCardTitle class="headline justify-center">
          {{ t("Are you sure you want to chnage the status to received?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn
            color="blue darken-1"
            text
            @click="dialogReceivedHouse.open = false"
          >
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogReceivedHouse.loading"
            @click="confirmReceivedHouse"
          >
            {{ t("Received") }}
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- receive house Dialog -->

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
import Table from "@/components/table.vue";

export default {
  components: {
    Table,
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
      // table
      content_url: JSON.parse(localStorage.getItem("results")).content_url,

      is_house_received: null,

      tableOptions: {
        itemsPerPage: 10,
        page: 1,
      },
      table: {
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["تعديل", "ايقاف", "طباعة", "استلام الوحدة السكنية"],
        search: null,
      },
      userData: [],
      action: [],
      // table

      // add
      visibleDeleteIcons: [],
      Forms: [],
      files: [],
      BankAccounts: [],
      Houses: [],
      file: null,
      building_type: null,
      HousesShow: false,
      addDialog: {
        open: false,
        saveLoading: false,
      },
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

      // received house
      dialogReceivedHouse: {
        open: false,
        receivedItem: null,
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
    this.getEmployees();
    this.getBankAccounts();
    this.getForms();
  },

  watch: {
    "dialogEdit.editedItem.form_id": {
      handler(newVal) {
        const selectedItem = this.Forms.find((item) => item._id === newVal);
        if (selectedItem) {
          this.getHousesEditO(selectedItem);
        }
      },
      immediate: true,
    },
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
        house_id: [(value) => !!value || this.t("This field is required")],
        form_id: [(value) => !!value || this.t("This field is required")],
        form: [(value) => !!value || this.t("This field is required")],
        bank_id: [(value) => !!value || this.t("This field is required")],
        address: [(value) => !!value || this.t("This field is required")],
        password_show: [(value) => !!value || this.t("This field is required")],
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
        contract_imgs: [(value) => !!value || this.t("This field is required")],
        residence_card_issue_date: [
          (value) => !!value || this.t("This field is required"),
        ],
        id_number: [(value) => !!value || this.t("This field is required")],
        email: [
          (value) => !!value || this.t("This field is required"),
          (value) =>
            /.+@.+\..+/.test(value) ||
            this.t("Please enter a valid email address"),
        ],
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11)
              return this.t("Phone number must be 11 digits");
            return true;
          },
        ],
        password_show: [(value) => !!value || this.t("This field is required")],
      };
    },

    headers() {
      const buildingType = JSON.parse(localStorage.getItem("results"))
        ?.center_id?.building_type;

      const baseHeaders = [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("Owner's name"),
          type: "link",
          link: `/admin-profile-owner`,
          key: "name",
        },
        {
          title: this.t("Owner's phone number"),
          type: "strong",
          link: ``,
          key: "phone",
        },
        {
          title: this.t("The block"),
          type: "strong",
          link: ``,
          key: "form_block_number",
        },
      ];

      if (buildingType === "شقق") {
        baseHeaders.push(
          {
            title: this.t("Form name"),
            type: "strong",
            link: ``,
            key: "form_name",
          },
          {
            title: this.t("Form Code"),
            type: "strong",
            link: ``,
            key: "form_code",
          },
          {
            title: this.t("Architecture name"),
            type: "strong",
            link: ``,
            key: "exact_apartment_building",
          },
          {
            title: this.t("Floor number"),
            type: "strong",
            link: ``,
            key: "house_apartment_floor_number",
          },
          {
            title: this.t("Residential unit name"),
            type: "strong",
            link: ``,
            key: "house_name",
          }
        );
      } else if (buildingType === "منازل") {
        baseHeaders.push(
          {
            title: this.t("Form name"),
            type: "strong",
            link: ``,
            key: "form_name",
          },
          {
            title: this.t("Form Code"),
            type: "strong",
            link: ``,
            key: "form_code",
          },
          {
            title: this.t("Residential unit name"),
            type: "strong",
            link: ``,
            key: "house_name",
          },
          {
            title: this.t("Number of Floors"),
            type: "strong",
            link: ``,
            key: "house_apartment_floor_number",
          },
          {
            title: this.t("Architecture name"),
            type: "strong",
            link: ``,
            key: "exact_apartment_building",
          },
          {
            title: this.t("Category"),
            type: "strong",
            link: ``,
            key: "form_category",
          },
          {
            title: this.t("Number of Floors"),
            type: "strong",
            link: ``,
            key: "floors",
          }
        );
      } else {
        baseHeaders.push(
          {
            title: this.t("Form name"),
            type: "strong",
            link: ``,
            key: "form_name",
          },
          {
            title: this.t("Form Code"),
            type: "strong",
            link: ``,
            key: "form_code",
          },
          {
            title: this.t("Residential unit name"),
            type: "strong",
            link: ``,
            key: "house_name",
          },
          {
            title: this.t("Architecture name"),
            type: "strong",
            link: ``,
            key: "exact_apartment_building",
          },
          {
            title: this.t("Floor number"),
            type: "strong",
            link: ``,
            key: "house_apartment_floor_number",
          },
          {
            title: this.t("Number of Floors"),
            type: "strong",
            link: ``,
            key: "floors",
          }
        );
      }

      baseHeaders.push({
        title: this.t("Operations"),
        key: "actions",
        sortable: false,
        type: "strong",
        link: "",
      });
      return baseHeaders;
    },

    ownerApartmentType() {
      return [
        { text: this.t("All"), value: null },
        { text: this.t("Received the residential unit"), value: true },
        { text: this.t("Not received the residential unit"), value: false },
      ];
    },

    filteredHouses() {
      return this.Houses.filter((House) => House.status !== "تم البيع");
    },
  },

  methods: {
    // Get Data
    async getCenter(newOptions) {
      if (newOptions) {
        if (JSON.stringify(newOptions) !== JSON.stringify(this.tableOptions)) {
          this.tableOptions = { ...newOptions };
        }
      }

      const key =
        this.tableOptions.sortBy && this.tableOptions.sortBy.length > 0
          ? this.tableOptions.sortBy[0]
          : "createdAt";
      const order =
        this.tableOptions.sortDesc && this.tableOptions.sortDesc.length > 0
          ? this.tableOptions.sortDesc[0]
            ? "desc"
            : "asc"
          : "desc";

      const sortByJSON = JSON.stringify({ key, order });

      this.table.loading = true;
      let { page, itemsPerPage } = this.tableOptions;

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      try {
        const response = await adminApi.getOwners({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          is_deleted: this.is_deleted,
          is_house_received: this.is_house_received,
        });
        this.table.Data = response.data.results.data;
        this.table.totalItems = response.data.results.count;
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
    async getEmployees() {
      try {
        const key = "createdAt";
        const order = "desc";

        const sortByJSON = JSON.stringify({ key, order });

        const response = await adminApi.getSellsEmployee({
          page: 1,
          limit: 1000000000000,
          sortBy: sortByJSON,
          search: null,
          is_deleted: false,
        });
        this.action = response.data.results.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    async getBankAccounts() {
      try {
        const response = await adminApi.getBankAccounts({
          page: 1,
          limit: 10000000000,
          sortBy: '{"key": "createdAt", "order": "desc"}',
          search: null,
          is_deleted: false,
        });
        this.BankAccounts = response.data.results.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    async getForms() {
      try {
        const response = await adminApi.getFormsSelect();

        this.Forms = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      }
    },
    // Get Data

    // images
    handleFileChange(event) {
      const newFiles = Array.from(event.target.files);
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.data.contract_imgs.push(reader.result);
          this.visibleDeleteIcons.push(false);
        };
        reader.readAsDataURL(file);
      });
    },
    handleFileChangeEdit(event) {
      const newFiles = Array.from(event.target.files);
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEdit.editedItem.contract_imgs.push(reader.result);
          this.visibleDeleteIcons.push(false);
        };
        reader.readAsDataURL(file);
      });
    },
    isBase64(image) {
      return /^data:image\/[a-z]+;base64,/.test(image);
    },
    deleteImage(index) {
      this.data.contract_imgs.splice(index, 1);
      this.visibleDeleteIcons.splice(index, 1);
    },
    deleteImageEdit(index) {
      this.dialogEdit.editedItem.contract_imgs.splice(index, 1);
      this.visibleDeleteIcons.splice(index, 1);
    },
    showDeleteIcon(index) {
      this.visibleDeleteIcons[index] = true;
    },
    hideDeleteIcon(index) {
      this.visibleDeleteIcons[index] = false;
    },
    // add
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
    getItemText(item) {
      if (item.building_type === "شقق") {
        return `${item.exact_apartment_building} - ${item.name}`;
      }
      return item.name;
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
    async addCenter() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addDialog.saveLoading = true;
        try {
          const response = await adminApi.addOwners({
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
            residence_card_issue_date: this.data.residence_card_issue_date,
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
          this.addDialog.saveLoading = false;
          await this.getCenter();
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
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.addDialog.saveLoading = false;
        }
      }
    },
    // Add Data

    // editItem
    getHousesEditO(item) {
      this.building_type = item.building_type;
      this.Houses = item.houses;
    },
    getHousesEdit(item) {
      this.dialogEdit.editedItem.house_id = null;
      this.building_type = item.building_type;
      this.Houses = item.houses;
    },
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };
      this.dialogEdit.open = true;
    },
    async editItemConform() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogEdit.loading = true;

        try {
          const response = await adminApi.editOwners({
            owner_id: this.dialogEdit.editedItem._id,
            name: this.dialogEdit.editedItem.name,
            phone: this.dialogEdit.editedItem.phone,
            password_show: this.dialogEdit.editedItem.password_show,
            email: this.dialogEdit.editedItem.email,
            address: this.dialogEdit.editedItem.address,
            form_id: this.dialogEdit.editedItem.form_id,
            house_id: this.dialogEdit.editedItem.house_id,
            contract_imgs: this.dialogEdit.editedItem.contract_imgs,
            id_img_front: this.dialogEdit.editedItem.id_img_front,
            id_img_back: this.dialogEdit.editedItem.id_img_back,
            location_img_front: this.dialogEdit.editedItem.location_img_front,
            location_img_back: this.dialogEdit.editedItem.location_img_back,
            passport_img: this.dialogEdit.editedItem.passport_img,
            id_number: this.dialogEdit.editedItem.id_number,
            bank_id: this.dialogEdit.editedItem.bank_id,
            residence_card_issue_date:
              this.dialogEdit.editedItem.residence_card_issue_date,
            id_place_of_issue: this.dialogEdit.editedItem.id_place_of_issue,
            id_issue_date: this.dialogEdit.editedItem.id_issue_date,
            residence_card_number:
              this.dialogEdit.editedItem.residence_card_number,
            residence_card_place_of_issue:
              this.dialogEdit.editedItem.residence_card_place_of_issue,
            owner_title_jop: this.dialogEdit.editedItem.owner_title_jop,
          });

          this.dialogEdit.open = false;
          this.dialogEdit.loading = false;
          this.getCenter();
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

    emitConfirmReceivedHouse(item) {
      this.dialogReceivedHouse.open = true;
      this.dialogReceivedHouse.receivedItem = { ...item };
    },

    async confirmReceivedHouse() {
      this.dialogReceivedHouse.loading = true;

      try {
        const response = await adminApi.editOwnerIsHouseReceived({
          id: this.dialogReceivedHouse.receivedItem._id,
        });
        this.dialogReceivedHouse.loading = false;
        this.dialogReceivedHouse.open = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.dialogReceivedHouse.loading = false;
          this.dialogReceivedHouse.open = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.dialogReceivedHouse.loading = false;
          this.dialogReceivedHouse.open = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      } finally {
        this.dialogReceivedHouse.loading = false;
        this.dialogReceivedHouse.open = false;
      }
    },

    async deleteItemConfirm() {
      this.dialogDelete.loading = true;
      var is_disabled = null;
      if (this.dialogDelete.deletedItem.is_disabled == true) {
        is_disabled = false;
      } else {
        is_disabled = true;
      }

      try {
        const response = await adminApi.disableOwners({
          id: this.dialogDelete.deletedItem._id,
          disable: is_disabled,
        });
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
        this.getCenter();
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

    // printItem
    printItem(item) {
      localStorage.setItem("PrintOwner", JSON.stringify(item));
      let routeData = this.$router.resolve({
        name: `admin-print-owner`,
      });
      window.open(routeData.href, "_blank");
    },
    // printItem

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

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
                <strong>{{ t("Owner's name") }} : {{ data.name }}</strong>
                <br />
                <strong>{{ t("Phone number") }} : {{ data.phone }}</strong>
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
                <div v-else>{{ t("No profile picture") }}</div>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
        <hr />
        <v-card-text
          style="display: flex; flex-direction: column; align-items: flex-start"
        >
          <h4>{{ t("Owner details") }} :-</h4>
          <br />
          <h4>{{ t("Email") }} : {{ data.email }}</h4>
          <br />
          <h4>{{ t("Address") }} : {{ data.address }}</h4>
          <br />
          <h4>{{ t("Password") }} : {{ data.password_show }}</h4>
          <br />
          <h4>{{ t("National Identification Number") }} : {{ data.id_number }}</h4>
          <br />
          <h4>
            {{ t("Issuing Authority of the Identification Card") }} :
            {{ data.id_place_of_issue }}
          </h4>
          <br />
          <h4>
            {{ t("Date of Issuance of the Identification Card") }} :
            {{ data.id_issue_date }}
          </h4>
          <br />
          <h4>{{ t("Residence Card Number") }} : {{ data.residence_card_number }}</h4>
          <br />
          <h4>{{ t("Issuing Authority of the Residence Card") }} : {{ data.rec }}</h4>

          <br />
          <h4>{{ t("Job Title") }} : {{ data.owner_title_jop }}</h4>
          <br />
          <h4>
            {{ t("Has the housing unit been received?") }} :
            {{ data.is_house_received ? "نعم" : "لا" }}
          </h4>
          <br />
          <h4 v-if="data.is_house_received">
            {{ t("Housing unit reception date") }} :
            {{ data.house_received_data.received_date }}
          </h4>
          <br />
          <h4 v-if="data.is_house_received">
            {{ t("received_monthly_payment_date") }} :
            {{ data.house_received_data.received_monthly_payment_date }}
          </h4>
          <br />
          <div style="width: 100%">
            <h4>
              <strong>{{ t("Contract Photos") }} :</strong>
            </h4>
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
            <div v-else>{{ t("Not available") }}</div>
          </div>
          <br />
          <div style="width: 100%">
            <v-row style="margin: 0px">
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4>
                        <strong>{{ t("ID pictures") }} :</strong>
                      </h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.id_img_front"
                        :src="content_url + data.id_img_front"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الهوية"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                      <img
                        v-if="data.id_img_back"
                        :src="content_url + data.id_img_back"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الهوية"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4>
                        <strong>{{ t("Housing card pictures") }} :</strong>
                      </h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.location_img_front"
                        :src="content_url + data.location_img_front"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صور بطاقة السكن"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                      <img
                        v-if="data.location_img_back"
                        :src="content_url + data.location_img_back"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صور بطاقة السكن"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
                    </v-col>
                  </v-row>
                </VCard>
              </v-col>
              <v-col cols="12" md="4">
                <VCard>
                  <v-row style="flex-direction: column; margin: 0px">
                    <v-col cols="12" md="12">
                      <h4>
                        <strong>{{ t("Passport Photo") }} :</strong>
                      </h4>
                    </v-col>
                    <v-col cols="12" md="12" style="text-align: center">
                      <img
                        v-if="data.passport_img"
                        :src="content_url + data.passport_img"
                        style="margin-inline: 10px; width: 40%; height: auto"
                        alt="صورة الجواز"
                      />
                      <div v-else style="margin-inline: 10px">
                        {{ t("Not available") }}
                      </div>
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
                {{ t("Add Another Owner") }}
              </VBtn>
            </VCol>
            <VCol
              cols="12"
              md="3"
              style="text-align: center"
              v-if="
                (tableTenants.Data.length === 0 && tableTenants.is_disabled == false) ||
                tableTenants.Data[0]?.is_disabled === true
              "
            >
              <VBtn
                tile
                color="primary"
                prepend-icon="mdi-plus"
                @click="addTenant.open = true"
                v-if="userData.includes('add')"
              >
                {{ t("Add Tenant Account") }}
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
      <br />
      <VCard v-if="table.Data.length > 0">
        <VCardTitle>
          <VRow justify="space-between" style="align-items: center; margin-bottom: 15px">
            <VCol cols="12" sm="12" md="12">
              <h4 style="text-align: center">الملاك الاخرين</h4>
            </VCol>
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
                <span>{{ t("Delete") }}</span>
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
                <span>{{ t("Edit") }}</span>
              </VTooltip>
            </template>
          </v-data-table>
        </VCardText>
      </VCard>
      <br />
      <VCard>
        <VCardTitle>
          <VRow justify="space-between" style="align-items: center; margin-bottom: 15px">
            <VCol cols="12" sm="12" md="12">
              <h4 style="text-align: center">{{ t("Tenants") }}</h4>
            </VCol>
            <VCol cols="12" sm="4" md="4">
              <VSelect
                :items="is_disabledItem"
                v-model="tableTenants.is_disabled"
                item-title="text"
                item-value="value"
                label="نوع الحساب"
                @update:modelValue="getTenants"
              />
            </VCol>
            <VCol cols="12" sm="12" md="12">
              <VTextField
                v-model="tableTenants.search"
                append-inner-icon="mdi-magnify"
                density="compact"
                :label="t('Search')"
                variant="solo"
                hide-details
                single-line
                @input="getTenants"
                clearable
              />
            </VCol>
          </VRow>
        </VCardTitle>
        <VCardText>
          <Table
            :table="tableTenants"
            :content_url="content_url"
            :tableOptions="tableOptionsTenants"
            :headers="headersTenants"
            @update:options="getTenants"
            @editItems="editItemTenants"
            @emitDisable="emitDisableTenants"
            @emitPrintItems="printItem"
          />
        </VCardText>
      </VCard>
    </div>

    <!-- Add Tenant Class Dialog -->
    <VDialog v-model="addTenant.open" max-width="800px">
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
                    v-model="dataAddTenant.name"
                    :rules="Rules.name"
                    :label="t(`Tenant Name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.phone"
                    :rules="Rules.phone"
                    :label="t(`Phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="6" v-if="email_symbol !== null">
                  <VTextField
                    v-model="dataAddTenant.email"
                    :rules="Rules.account_email"
                    dense
                    :label="t('Email')"
                    outlined
                  >
                    <template #prepend-inner>{{ email_symbol }}</template>
                  </VTextField>
                </VCol>
                <VCol cols="12" md="6" v-else>
                  <VTextField
                    v-model="dataAddTenant.email"
                    :rules="Rules.email"
                    :label="t(`Email`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.password_show"
                    :rules="Rules.password_show"
                    :label="t(`Password`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.address"
                    :rules="Rules.address"
                    :label="t(`Address`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.id_number"
                    :rules="Rules.id_number"
                    :label="t('National Identification Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.id_place_of_issue"
                    :rules="Rules.id_place_of_issue"
                    :label="t('Issuing Authority of the Identification Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VLabel>{{ t("Date of Issuance of the Identification Card") }} </VLabel>
                  <VueDatePicker
                    :format="format"
                    v-model="dataAddTenant.id_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Identification Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.residence_card_number"
                    :rules="Rules.residence_card_number"
                    :label="t('Residence Card Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.residence_card_place_of_issue"
                    :label="t('Issuing Authority of the Residence Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VLabel>{{ t("Date of Issuance of the Residence Card") }} </VLabel>

                  <VueDatePicker
                    :format="format"
                    v-model="dataAddTenant.residence_card_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Residence Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dataAddTenant.owner_title_jop"
                    :rules="Rules.owner_title_jop"
                    :label="t('Job Title')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VSelect
                    :items="banks"
                    item-title="name"
                    item-value="_id"
                    v-model="dataAddTenant.bank_id"
                    :rules="Rules.bank_id"
                    :label="t('Bank Name')"
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
                        @change="handleFileChangeIDOTenant"
                        @click:clear="
                          file = null;
                          dataAddTenant.id_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAddTenant.id_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dataAddTenant.id_img_front)
                            ? dataAddTenant.id_img_front
                            : content_url + dataAddTenant.id_img_front
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
                        @change="handleFileChangeIDTTenant"
                        @click:clear="
                          file = null;
                          dataAddTenant.id_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAddTenant.id_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dataAddTenant.id_img_back)
                            ? dataAddTenant.id_img_back
                            : content_url + dataAddTenant.id_img_back
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
                        @change="handleFileChangeLTenant"
                        @click:clear="
                          file = null;
                          dataAddTenant.location_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAddTenant.location_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dataAddTenant.location_img_front)
                            ? dataAddTenant.location_img_front
                            : content_url + dataAddTenant.location_img_front
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
                        @change="handleFileChangeLTTenant"
                        @click:clear="
                          file = null;
                          dataAddTenant.location_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAddTenant.location_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dataAddTenant.location_img_back)
                            ? dataAddTenant.location_img_back
                            : content_url + dataAddTenant.location_img_back
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
                        @change="handleFileChangePTenant"
                        @click:clear="
                          file = null;
                          dataAddTenant.passport_img = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dataAddTenant.passport_img"
                        style="width: 130px"
                        :src="
                          isBase64(dataAddTenant.passport_img)
                            ? dataAddTenant.passport_img
                            : content_url + dataAddTenant.passport_img
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
          <VBtn color="primary" text @click="addTenant.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn color="primary" :loading="addTenant.saveLoading" @click="addCenterTenant">
            {{ t("Addition") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Add Tenant Class Dialog -->

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
                  <VLabel>{{ t("Date of Issuance of the Identification Card") }} </VLabel>
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
                  <VLabel>{{ t("Date of Issuance of the Residence Card") }} </VLabel>

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
          <VBtn color="primary" :loading="addDialog.saveLoading" @click="addCenter">
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
                  <Vlabel>{{ t("Date of Issuance of the Identification Card") }} </Vlabel>
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
                    v-model="dialogEdit.editedItem.residence_card_place_of_issue"
                    :label="t('Issuing Authority of the Residence Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <Vlabel>{{ t("Date of Issuance of the Residence Card") }} </Vlabel>
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
                            : content_url + dialogEdit.editedItem.location_img_front
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
                            : content_url + dialogEdit.editedItem.location_img_back
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
          <VBtn color="primary" :loading="dialogEdit.loading" @click="editItemConform">
            {{ t("Edit") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Class Dialog -->

    <!-- Edit Tenants Class Dialog -->
    <VDialog v-model="dialogEditTenants.open" max-width="800px" max-height="100%">
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
                    v-model="dialogEditTenants.editedItem.name"
                    :rules="Rules.name"
                    :label="t(`Tenant Name`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.phone"
                    :rules="Rules.phone"
                    :label="t(`Phone number`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.email"
                    :rules="Rules.email"
                    :label="t(`Email`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.password_show"
                    :rules="Rules.password_show"
                    :label="t(`Password`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.address"
                    :rules="Rules.address"
                    :label="t(`Address`)"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.id_number"
                    :rules="Rules.id_number"
                    :label="t('National Identification Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.id_place_of_issue"
                    :rules="Rules.id_place_of_issue"
                    :label="t('Issuing Authority of the Identification Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VLabel>{{ t("Date of Issuance of the Identification Card") }} </VLabel>
                  <VueDatePicker
                    :format="format"
                    v-model="dialogEditTenants.editedItem.id_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Identification Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.residence_card_number"
                    :rules="Rules.residence_card_number"
                    :label="t('Residence Card Number')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.residence_card_place_of_issue"
                    :label="t('Issuing Authority of the Residence Card')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VLabel>{{ t("Date of Issuance of the Residence Card") }} </VLabel>

                  <VueDatePicker
                    :format="format"
                    v-model="dialogEditTenants.editedItem.residence_card_issue_date"
                    density="compact"
                    :label="t('Date of Issuance of the Residence Card')"
                    outlined
                    required
                    dense
                  ></VueDatePicker>
                </VCol>
                <VCol cols="12" md="4">
                  <VTextField
                    v-model="dialogEditTenants.editedItem.owner_title_jop"
                    :rules="Rules.owner_title_jop"
                    :label="t('Job Title')"
                    outlined
                  />
                </VCol>
                <VCol cols="12" md="4">
                  <VSelect
                    :items="banks"
                    item-title="name"
                    item-value="_id"
                    v-model="dialogEditTenants.editedItem.bank_id"
                    :rules="Rules.bank_id"
                    :label="t('Bank Name')"
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
                        @change="handleFileChangeIDOEditTenant"
                        @click:clear="
                          file = null;
                          dialogEditTenants.editedItem.id_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEditTenants.editedItem.id_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEditTenants.editedItem.id_img_front)
                            ? dialogEditTenants.editedItem.id_img_front
                            : content_url + dialogEditTenants.editedItem.id_img_front
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
                        @change="handleFileChangeIDTEditTenant"
                        @click:clear="
                          file = null;
                          dialogEditTenants.editedItem.id_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEditTenants.editedItem.id_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEditTenants.editedItem.id_img_back)
                            ? dialogEditTenants.editedItem.id_img_back
                            : content_url + dialogEditTenants.editedItem.id_img_back
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
                        @change="handleFileChangeLEditTenant"
                        @click:clear="
                          file = null;
                          dialogEditTenants.editedItem.location_img_front = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEditTenants.editedItem.location_img_front"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEditTenants.editedItem.location_img_front)
                            ? dialogEditTenants.editedItem.location_img_front
                            : content_url +
                              dialogEditTenants.editedItem.location_img_front
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
                        @change="handleFileChangeLTEditTenant"
                        @click:clear="
                          file = null;
                          dialogEditTenants.editedItem.location_img_back = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEditTenants.editedItem.location_img_back"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEditTenants.editedItem.location_img_back)
                            ? dialogEditTenants.editedItem.location_img_back
                            : content_url + dialogEditTenants.editedItem.location_img_back
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
                        @change="handleFileChangePEditTenant"
                        @click:clear="
                          file = null;
                          dialogEditTenants.editedItem.passport_img = null;
                        "
                      />
                    </VCol>
                    <VCol cols="12" md="6">
                      <img
                        v-if="dialogEditTenants.editedItem.passport_img"
                        style="width: 130px"
                        :src="
                          isBase64(dialogEditTenants.editedItem.passport_img)
                            ? dialogEditTenants.editedItem.passport_img
                            : content_url + dialogEditTenants.editedItem.passport_img
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
          <VBtn color="primary" text @click="dialogEditTenants.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary"
            :loading="dialogEditTenants.loading"
            @click="editItemConformTenants"
          >
            {{ t("Edit") }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Edit Tenants Class Dialog -->

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

    <!-- Disable Dialog -->
    <VDialog v-model="dialogDisable.open" max-width="500px">
      <VCard>
        <VCardTitle
          class="headline justify-center"
          v-if="dialogDisable.deletedItem.is_disabled == false"
        >
          {{ t("Are you sure you want to deactivate this account?") }}
        </VCardTitle>
        <VCardTitle class="headline justify-center" v-else>
          {{ t("Are you sure the account is activated?") }}
        </VCardTitle>
        <VCardActions>
          <VSpacer />
          <VBtn color="blue darken-1" text @click="dialogDisable.open = false">
            {{ t("Cancel") }}
          </VBtn>
          <VBtn
            color="primary white--text"
            :loading="dialogDisable.loading"
            @click="disableItemConfirmTenants"
          >
            <span v-if="dialogDisable.deletedItem.is_disabled == false">{{
              t("Deactivate")
            }}</span>
            <span v-else>{{ t("Activation") }}</span>
          </VBtn>
          <VSpacer />
        </VCardActions>
      </VCard>
    </VDialog>
    <!-- Disable Dialog -->

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
import Table from "@/components/table.vue";

export default {
  components: {
    VDataTable,
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
      content_url: JSON.parse(localStorage.getItem("results")).content_url,
      email_symbol: JSON.parse(localStorage.getItem("results")).center_id.email_symbol,

      id: null,
      data: {},
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

      // table
      tableOptionsTenants: {
        itemsPerPage: 10,
        page: 1,
      },
      is_disabledItem: [
        { text: "موقف", value: true },
        { text: "غير موقف", value: false },
      ],
      tableTenants: {
        is_disabled: false,
        loading: false,
        totalItems: 0,
        Data: [],
        actions: ["تعديل", "ايقاف", "اعادة تفعيل", "طباعة"],
        search: null,
        itemsPerPage: 5,
      },
      // table

      // addTenant
      addTenant: {
        open: false,
        saveLoading: false,
      },
      dataAddTenant: {
        name: null,
        phone: null,
        password_show: null,
        email: null,
        address: null,
        id_number: null,
        id_place_of_issue: null,
        id_issue_date: null,
        residence_card_number: null,
        residence_card_place_of_issue: null,
        residence_card_issue_date: null,
        owner_title_jop: null,
        id_img_front: null,
        id_img_back: null,
        location_img_front: null,
        location_img_back: null,
        passport_img: null,
        bank_id: null,
      },
      banks: [],
      // addTenant

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

      // dialogEditTenants
      dialogEditTenants: {
        open: false,
        editedItem: null,
        isFormValid: false,
        loading: false,
      },
      // dialogEditTenants

      // Delete
      dialogDelete: {
        open: false,
        deletedItem: null,
        loading: false,
      },
      // Delete

      // dialogDisable
      dialogDisable: {
        open: false,
        deletedItem: null,
        loading: false,
      },
      // dialogDisable

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
    if (this.$route.query.data) {
      const itemData = JSON.parse(this.$route.query.data);
      this.id = itemData;
      this.getCenter();
      this.getBanks();
      this.getAnotherOwner();
    }
  },
  computed: {
    Rules() {
      return {
        bank_id: [(value) => !!value || this.t("This field is required")],
        passport_img: [(value) => !!value || this.t("This field is required")],
        password_show: [(value) => !!value || this.t("This field is required")],
        account_email: [
          (value) => !!value || this.t("This field is required"),
          (v) => {
            const hasEnglishCharacters = /[a-zA-Z]/.test(v);
            if (!hasEnglishCharacters) {
              return this.t("The email must contain English characters");
            }
            return true;
          },
          (v) => {
            const hasAtSign = /@/.test(v);
            if (hasAtSign) {
              return this.t("The email must not contain the symbol") + " ( @ ) ";
            }
            return true;
          },
          (v) => {
            const hasSpace = /\s/.test(v);
            if (hasSpace) {
              return this.t("The email must not contain spaces between characters");
            }
            return true;
          },
          (v) => {
            const hasDot = /\./.test(v);
            if (hasDot) {
              return this.t("The email must not contain the symbol") + " ( . ) ";
            }
            return true;
          },
        ],
        email: [
          (value) => !!value || this.t("This field is required"),
          (value) =>
            /.+@.+\..+/.test(value) || this.t("Please enter a valid email address"),
        ],
        location_img_back: [(value) => !!value || this.t("This field is required")],
        location_img_front: [(value) => !!value || this.t("This field is required")],
        id_img_back: [(value) => !!value || this.t("This field is required")],
        id_img_front: [(value) => !!value || this.t("This field is required")],
        owner_title_jop: [(value) => !!value || this.t("This field is required")],
        residence_card_place_of_issue: [
          (value) => !!value || this.t("This field is required"),
        ],
        residence_card_number: [(value) => !!value || this.t("This field is required")],
        id_issue_date: [(value) => !!value || this.t("This field is required")],
        id_place_of_issue: [(value) => !!value || this.t("This field is required")],
        name: [(value) => !!value || this.t("This field is required")],
        residence_card_issue_date: [
          (value) => !!value || this.t("This field is required"),
        ],
        id_number: [(value) => !!value || this.t("This field is required")],
        phone: [
          (value) => {
            if (!value) return this.t("This field is required");
            if (value.length !== 11) return this.t("Phone number must be 11 digits");
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
    headersTenants() {
      return [
        {
          title: "#",
          type: "strong",
          link: "",
          key: "num",
        },
        {
          title: this.t("Tenant Name"),
          type: "linkURL",
          link: `/admin-profile-tenant`,
          key: "name",
        },
        {
          title: this.t("Phone number"),
          type: "strong",
          link: ``,
          key: "phone",
        },
        {
          title: this.t("Email"),
          type: "strong",
          link: ``,
          key: "email",
        },
        {
          title: this.t("Password"),
          type: "strong",
          link: ``,
          key: "password_show",
        },
        {
          title: this.t("Address"),
          type: "strong",
          link: ``,
          key: "address",
        },
        {
          title: this.t("Form Code"),
          type: "strong",
          link: ``,
          key: "form_code",
        },
        {
          title: this.t("Job Title"),
          type: "strong",
          link: ``,
          key: "owner_title_jop",
        },
        {
          title: this.t("Date"),
          type: "strong",
          link: ``,
          key: "createdAt",
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
        } else if (error.response && error.response.data.error === true) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
    async getBanks() {
      try {
        this.loading = true;
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

        const response = await adminApi.getBankAccounts({
          page: 1,
          limit: 99999999999,
          search: null,
          sortBy: sortByJSON,
          is_disabled: false,
        });
        this.banks = response.data.results.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
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
        this.table.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
    async getTenants(newOptions) {
      if (newOptions) {
        if (JSON.stringify(newOptions) !== JSON.stringify(this.tableOptions)) {
          this.tableOptions = { ...newOptions };
        }
      }

      const key =
        this.tableOptionsTenants.sortBy && this.tableOptionsTenants.sortBy.length > 0
          ? this.tableOptionsTenants.sortBy[0]
          : "createdAt";
      const order =
        this.tableOptionsTenants.sortDesc && this.tableOptionsTenants.sortDesc.length > 0
          ? this.tableOptionsTenants.sortDesc[0]
            ? "desc"
            : "asc"
          : "desc";

      const sortByJSON = JSON.stringify({ key, order });

      this.tableTenants.loading = true;
      let { page, itemsPerPage } = this.tableOptionsTenants;

      if (!page) {
        page = 1;
      }
      if (!itemsPerPage) {
        itemsPerPage = 10;
      }

      try {
        const response = await adminApi.getTenants({
          id: this.id,
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.tableTenants.search,
          is_disabled: this.tableTenants.is_disabled,
        });
        this.tableTenants.Data = response.data.results.data;
        this.tableTenants.totalItems = response.data.results.count;
        this.tableTenants.loading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.tableTenants.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.tableTenants.loading = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.tableTenants.loading = false;
      }
    },
    // Get Data

    // printItem
    printItem(item) {
      localStorage.setItem("PrintTenant", item._id);
      let routeData = this.$router.resolve({
        name: `admin-print-tenant`,
      });
      window.open(routeData.href, "_blank");
    },
    // printItem

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
    // imagesTenant
    handleFileChangeIDOTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAddTenant.id_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeIDTTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAddTenant.id_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeLTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAddTenant.location_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeLTTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAddTenant.location_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangePTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dataAddTenant.passport_img = reader.result;
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
    // EditTenant
    handleFileChangeIDOEditTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEditTenants.editedItem.id_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeIDTEditTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEditTenants.editedItem.id_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeLEditTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEditTenants.editedItem.location_img_front = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangeLTEditTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEditTenants.editedItem.location_img_back = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleFileChangePEditTenant(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.dialogEditTenants.editedItem.passport_img = reader.result;
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
            id_issue_date: this.format(this.dataAdd.id_issue_date),
            residence_card_number: this.dataAdd.residence_card_number,
            residence_card_issue_date: this.format(
              this.dataAdd.residence_card_issue_date
            ),
            residence_card_place_of_issue: this.dataAdd.residence_card_place_of_issue,
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
          } else if (error.response && error.response.data.error === true) {
            this.addDialog.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.addDialog.saveLoading = false;
        }
      }
    },
    // Add Data

    // add Tenant Data
    async addCenterTenant() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.addTenant.saveLoading = true;
        try {
          const response = await adminApi.addTenants({
            owner_id: this.id,
            name: this.dataAddTenant.name,
            phone: this.dataAddTenant.phone,
            password_show: this.dataAddTenant.password_show,
            email:
              this.email_symbol !== null
                ? this.dataAddTenant.email + this.email_symbol
                : this.dataAddTenant.email,
            address: this.dataAddTenant.address,
            house_id: this.data.house_id,
            form_id: this.data.form_id,
            id_number: this.dataAddTenant.id_number,
            id_place_of_issue: this.dataAddTenant.id_place_of_issue,
            id_issue_date: this.format(this.dataAddTenant.id_issue_date),
            residence_card_number: this.dataAddTenant.residence_card_number,
            residence_card_issue_date: this.format(
              this.dataAddTenant.residence_card_issue_date
            ),
            residence_card_place_of_issue: this.dataAddTenant
              .residence_card_place_of_issue,
            owner_title_jop: this.dataAddTenant.owner_title_jop,
            id_img_front: this.dataAddTenant.id_img_front,
            id_img_back: this.dataAddTenant.id_img_back,
            location_img_front: this.dataAddTenant.location_img_front,
            location_img_back: this.dataAddTenant.location_img_back,
            passport_img: this.dataAddTenant.passport_img,
            bank_id: this.dataAddTenant.bank_id,
          });

          this.addTenant.saveLoading = false;
          await this.getCenter();
          await this.getTenants();
          await this.getAnotherOwner();
          this.addTenant.open = false;
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.addTenant.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.addTenant.saveLoading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.addTenant.saveLoading = false;
        }
      }
    },
    // add Tenant Data

    // editItem
    editItem(item) {
      this.dialogEdit.editedItem = { ...item };

      if (typeof this.dialogEdit.editedItem.id_issue_date === "string") {
        const dateParts = this.dialogEdit.editedItem.id_issue_date.split("/");
        if (dateParts.length === 3) {
          const day = parseInt(dateParts[0], 10);
          const month = parseInt(dateParts[1], 10) - 1;
          const year = parseInt(dateParts[2], 10);
          this.dialogEdit.editedItem.id_issue_date = new Date(year, month, day);
        }
      }

      if (typeof this.dialogEdit.editedItem.residence_card_issue_date === "string") {
        const dateParts = this.dialogEdit.editedItem.residence_card_issue_date.split("/");
        if (dateParts.length === 3) {
          const day = parseInt(dateParts[0], 10);
          const month = parseInt(dateParts[1], 10) - 1;
          const year = parseInt(dateParts[2], 10);
          this.dialogEdit.editedItem.residence_card_issue_date = new Date(
            year,
            month,
            day
          );
        }
      }

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
            id_issue_date: this.format(this.dialogEdit.editedItem.id_issue_date),
            residence_card_number: this.dialogEdit.editedItem.residence_card_number,
            residence_card_issue_date: this.format(
              this.dialogEdit.editedItem.residence_card_issue_date
            ),
            residence_card_place_of_issue: this.dialogEdit.editedItem
              .residence_card_place_of_issue,
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
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.dialogEdit.open = false;
            this.dialogEdit.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.dialogEdit.loading = false;
        }
      }
    },
    // editItem

    // editItemTenants
    editItemTenants(item) {
      this.dialogEditTenants.editedItem = { ...item };

      if (typeof this.dialogEditTenants.editedItem.id_issue_date === "string") {
        const dateParts = this.dialogEditTenants.editedItem.id_issue_date.split("/");
        if (dateParts.length === 3) {
          const day = parseInt(dateParts[0], 10);
          const month = parseInt(dateParts[1], 10) - 1;
          const year = parseInt(dateParts[2], 10);
          this.dialogEditTenants.editedItem.id_issue_date = new Date(year, month, day);
        }
      }

      if (
        typeof this.dialogEditTenants.editedItem.residence_card_issue_date === "string"
      ) {
        const dateParts = this.dialogEditTenants.editedItem.residence_card_issue_date.split(
          "/"
        );
        if (dateParts.length === 3) {
          const day = parseInt(dateParts[0], 10);
          const month = parseInt(dateParts[1], 10) - 1;
          const year = parseInt(dateParts[2], 10);
          this.dialogEditTenants.editedItem.residence_card_issue_date = new Date(
            year,
            month,
            day
          );
        }
      }

      this.dialogEditTenants.open = true;
    },
    async editItemConformTenants() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.dialogEditTenants.loading = true;

        try {
          const response = await adminApi.editTenants({
            id: this.dialogEditTenants.editedItem._id,
            owner_id: this.id,
            name: this.dialogEditTenants.editedItem.name,
            phone: this.dialogEditTenants.editedItem.phone,
            email: this.dialogEditTenants.editedItem.email,
            password_show: this.dialogEditTenants.editedItem.password_show,
            bank_id: this.dialogEditTenants.editedItem.bank_id,
            address: this.dialogEditTenants.editedItem.address,
            id_place_of_issue: this.dialogEditTenants.editedItem.id_place_of_issue,
            id_issue_date: this.format(this.dialogEditTenants.editedItem.id_issue_date),
            residence_card_number: this.dialogEditTenants.editedItem
              .residence_card_number,
            residence_card_issue_date: this.format(
              this.dialogEditTenants.editedItem.residence_card_issue_date
            ),
            residence_card_place_of_issue: this.dialogEditTenants.editedItem
              .residence_card_place_of_issue,
            owner_title_jop: this.dialogEditTenants.editedItem.owner_title_jop,
            id_img_front: this.dialogEditTenants.editedItem.id_img_front,
            id_img_back: this.dialogEditTenants.editedItem.id_img_back,
            location_img_front: this.dialogEditTenants.editedItem.location_img_front,
            location_img_back: this.dialogEditTenants.editedItem.location_img_back,
            passport_img: this.dialogEditTenants.editedItem.passport_img,
          });

          this.dialogEditTenants.open = false;
          this.dialogEditTenants.loading = false;
          this.getCenter();
          this.getAnotherOwner();
          this.getTenants();
          this.showDialogfunction(response.data.message, "primary");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.$store.dispatch("submitLogout");
          } else if (error.response && error.response.status === 500) {
            this.dialogEditTenants.open = false;
            this.dialogEditTenants.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          } else if (error.response && error.response.data.error === true) {
            this.dialogEditTenants.open = false;
            this.dialogEditTenants.loading = false;
            this.showDialogfunction(error.response.data.message, "#FF5252");
          }
        } finally {
          this.dialogEditTenants.loading = false;
        }
      }
    },
    // editItemTenants

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
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.dialogDelete.loading = false;
          this.dialogDelete.open = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.dialogDelete.loading = false;
        this.dialogDelete.open = false;
      }
    },
    // deleteItem

    // emitDisableTenants
    emitDisableTenants(item) {
      this.dialogDisable.deletedItem = { ...item };
      this.dialogDisable.open = true;
    },
    async disableItemConfirmTenants() {
      this.dialogDisable.loading = true;
      var is_disabled = null;
      if (this.dialogDisable.deletedItem.is_disabled == false) {
        is_disabled = true;
      } else {
        is_disabled = false;
      }
      try {
        const response = await adminApi.disabledTenants(
          this.dialogDisable.deletedItem._id,
          is_disabled
        );
        this.dialogDisable.loading = false;
        this.dialogDisable.open = false;
        this.tableTenants.is_disabled = false;
        this.getCenter();
        this.getAnotherOwner();
        this.getTenants();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.dialogDisable.loading = false;
          this.dialogDisable.open = false;
          this.$store.dispatch("submitLogout");
        } else if (error.response && error.response.status === 500) {
          this.dialogDisable.loading = false;
          this.dialogDisable.open = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        } else if (error.response && error.response.data.error === true) {
          this.dialogDisable.loading = false;
          this.dialogDisable.open = false;
          this.showDialogfunction(error.response.data.message, "#FF5252");
        }
      } finally {
        this.dialogDisable.loading = false;
        this.dialogDisable.open = false;
      }
    },
    // emitDisableTenants

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

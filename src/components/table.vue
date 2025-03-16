<template>
  <VDataTableServer
    loading-text="جاري التحميل ... الرجاء الانتظار"
    class="elevation-1"
    :headers="isMobile ? [] : headers"
    :items="table.Data"
    :search="table.actions.includes('بحث') ? search : null"
    :loading="table.loading"
    :options="tableOptions"
    :items-per-page="tableOptions.itemsPerPage"
    :items-length="table.totalItems"
    :items-per-page-options="[
      { value: 5, title: '5' },
      { value: 10, title: '10' },
      { value: 25, title: '25' },
      { value: 50, title: '50' },
      { value: 100, title: '100' },
      { value: table.totalItems, title: '$vuetify.dataFooter.itemsPerPageAll' },
    ]"
    :items-per-page-text="t('Data is displayed:')"
    no-data-text="لا توجد بيانات متاحة"
  >
    <template v-slot:item="{ item, index }">
      <tr v-if="!isMobile">
        <td v-for="(header, ind) in headers" :key="ind">
          <div v-if="header.key === 'num'">
            {{ index + 1 }}
          </div>
          <div v-else-if="header.type === 'link'">
            <RouterLink
              :to="header.link"
              @click.native.prevent="emitGoToPage(item.selectable)"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.type === 'showLink'">
            <v-btn
              v-if="item.selectable[header.key]"
              color="indigo"
              variant="text"
              @click="showLinkA(item.selectable)"
            >
              عرض
            </v-btn>
          </div>
          <div v-else-if="header.type === 'linkURL'">
            <RouterLink
              :to="{
                path: header.link,
                query: { data: JSON.stringify(item.selectable._id) },
              }"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.type === 'linkURLData'">
            <RouterLink
              :to="{
                path: header.link,
                query: { data: JSON.stringify(item.selectable) },
              }"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.type === 'linkk'">
            <RouterLink
              :to="header.link"
              @click.native.prevent="emitGoToPagee(item.selectable)"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.type === 'receiver_type'">
            <strong>{{ item.selectable.receiver_type }}</strong>
            <template
              v-if="
                item.selectable.receiver_type === 'حارس محدد' ||
                item.selectable.receiver_type === 'مالك محدد' ||
                item.selectable.receiver_type === 'موظف مبيعات محدد' ||
                item.selectable.receiver_type === 'مستاجر محدد'
              "
            >
              <details>
                <summary class="button-like">عرض</summary>
                <ul>
                  <li v-for="(user, index) in item.selectable.receivers" :key="index">
                    {{ user.name }}
                  </li>
                </ul>
              </details>
            </template>
          </div>
          <div v-else-if="header.type === 'id_img_back'">
            <img
              v-if="item.selectable.id_img_back"
              class="teacher_image_table"
              :src="content_urll + item.selectable.id_img_back"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.id_img_back)"
            />
          </div>
          <div v-else-if="header.key === 'current_status'">
            <span v-if="item.selectable.current_status.type == 'تم الانتهاء'">
              <v-icon color="#4caf50" size="40px">mdi-check-decagram</v-icon><br />
              <span> {{ item.selectable.current_status.createdAt }} </span>
            </span>
          </div>
          <div v-else-if="header.type === 'Accept'">
            <span v-if="item.selectable.current_status.type == 'تم الموافقة'">
              <v-icon color="#1976d2" size="40px">mdi-check-decagram</v-icon><br />
              <span> {{ item.selectable.current_status.createdAt }} </span>
            </span>
          </div>
          <div v-else-if="header.type === 'Room names'">
            <span v-if="item.selectable.rooms.length == 0">لا يوجد</span>
            <details v-else>
              <summary class="button-like">عرض</summary>
              <ul>
                <li v-for="(it, index) in item.selectable.rooms" :key="index">
                  {{ it }}
                </li>
              </ul>
            </details>
          </div>
          <div v-else-if="header.type === 'telegram_chat_id'">
            <span
              v-if="
                item.selectable.telegram_chat_id !== null &&
                item.selectable.telegram_chat_id !== ''
              "
            >
              <v-icon color="#4caf50" size="40px">mdi-check-decagram</v-icon><br />
            </span>
          </div>
          <div v-else-if="header.type === 'typeAdmin'">
            <span v-if="item.selectable.type == 'admin'">
              <span> ادمن </span>
            </span>
            <span v-else-if="item.selectable.type == 'manager_accountant'">
              <span> محاسب </span>
            </span>
            <span v-else-if="item.selectable.type == 'resident_manager'">
              <span> أداري مجمع </span>
            </span>
            <span v-else-if="item.selectable.type == 'investor'">
              <span> مستثمر </span>
            </span>
            <span v-else-if="item.selectable.type == 'investor_accountant'">
              <span> محاسب المستثمر </span>
            </span>
          </div>
          <div v-else-if="header.type === 'current_status'">
            <span v-if="item.selectable.current_status.type == 'رفض'">
              <v-icon color="rgb(175 76 76)" size="40px">mdi-close-octagon-outline</v-icon
              ><br />
              <span> {{ item.selectable.current_status.createdAt }} </span>
            </span>
          </div>
          <div v-else-if="header.type === 'id_img_front'">
            <img
              v-if="item.selectable.id_img_front"
              class="teacher_image_table"
              :src="content_urll + item.selectable.id_img_front"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.id_img_front)"
            />
          </div>
          <div v-else-if="header.type === 'location_img_back'">
            <img
              v-if="item.selectable.location_img_back"
              class="teacher_image_table"
              :src="content_urll + item.selectable.location_img_back"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.location_img_back)"
            />
          </div>
          <div v-else-if="header.type === 'location_img_front'">
            <img
              v-if="item.selectable.location_img_front"
              class="teacher_image_table"
              :src="content_urll + item.selectable.location_img_front"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.location_img_front)"
            />
          </div>
          <div v-else-if="header.type === 'passport_img'">
            <img
              v-if="item.selectable.passport_img"
              class="teacher_image_table"
              :src="content_urll + item.selectable.passport_img"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.passport_img)"
            />
          </div>
          <div v-else-if="header.type === 'images'">
            <img
              v-if="item.selectable[header.key][0]"
              @click="emitShowImgs(item)"
              :src="content_urll + item.selectable[header.key][0]"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.type === 'imgs'">
            <img
              v-if="item.selectable.imgs"
              @click="emitShowImgs(item)"
              :src="content_urll + item.selectable.imgs[0]"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.type === 'image'">
            <img
              v-if="item.selectable.logo"
              @click="emitShowImgs(item)"
              :src="content_urll + item.selectable.logo"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.type === 'center_forms'">
            <ul>
              <li v-for="(form, index) in item.selectable.center_forms" :key="index">
                {{ form.name }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'building_space'">
            <ul>
              <li
                v-for="(building_spac, index) in item.selectable.building_space"
                :key="index"
              >
                {{ building_spac }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'total_space'">
            <ul>
              <li v-for="(total_spac, inde) in item.selectable.total_space" :key="inde">
                {{ total_spac }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'apartment_building'">
            <ul>
              <li
                v-for="(apartment_buildin, inde) in item.selectable.apartment_building"
                :key="inde"
              >
                {{ apartment_buildin }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'current_employeeName'">
            {{ item.selectable.current_employee.name }}
          </div>
          <div v-else-if="header.key === 'buyer_info.customer_name'">
            {{ item.selectable.buyer_info.customer_name }}
          </div>
          <div v-else-if="header.key === 'is_finished'">
            <v-chip :color="item.selectable.is_finished ? 'success' : 'error'">
              {{ item.selectable.is_finished ? "اكمل المهمة" : "لم يكمل المهمة" }}
            </v-chip>
          </div>
          <div v-else-if="header.key === 'is_customer_interested'">
            {{ item.selectable.is_customer_interested ? "نعم" : "كلا" }}
          </div>
          <div v-else-if="header.key === 'is_customer_locking_for_loan'">
            {{ item.selectable.is_customer_locking_for_loan ? "نعم" : "كلا" }}
          </div>
          <div v-else-if="header.key === 'customter_price'">
            {{ numberWithComma(item.selectable.customter_price) }}
          </div>
          <div v-else-if="header.key === 'buyer_info.customer_phone'">
            {{ item.selectable.buyer_info.customer_phone }}
          </div>
          <div v-else-if="header.type === 'createdAt'">
            {{
              new Date(item.selectable.createdAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })
            }}
          </div>
          <div v-else-if="header.type === 'total_price'">
            {{ numberWithComma(item.selectable.total_price) }}
          </div>
          <div v-else-if="header.type === 'mobile_bill_price'">
            {{ numberWithComma(item.selectable.mobile_bill_price) }}
          </div>
          <div v-else-if="header.type === 'total_paid_price'">
            {{ numberWithComma(item.selectable.total_paid_price) }}
          </div>
          <div v-else-if="header.type === 'salary'">
            {{ numberWithComma(item.selectable.salary) }}
          </div>
          <div v-else-if="header.type === 'total_un_paid_price'">
            {{ numberWithComma(item.selectable.total_un_paid_price) }}
          </div>
          <div v-else-if="header.key === 'buyer_info.customer_phone_two'">
            {{ item.selectable.buyer_info.customer_phone_two }}
          </div>
          <div v-else-if="item.selectable.service && header.key === 'service.name'">
            {{ item.selectable.service.name }}
          </div>
          <div v-else-if="item.selectable.service && header.key === 'service.price'">
            {{ numberWithComma(item.selectable.service.price) }}
          </div>
          <div v-else-if="header.key === 'price'" class="l">
            {{ numberWithComma(item.selectable.price) }}
          </div>
          <div v-else-if="item.selectable.service && header.key === 'service.type'">
            {{ item.selectable.service.type }}
          </div>
          <div v-else-if="header.key === 'money'">
            {{ numberWithComma(item.selectable.money) }}
          </div>
          <div v-else-if="header.key === 'is_available'">
            <p
              v-if="
                item.selectable.service && item.selectable.service.is_available == true
              "
            >
              مفعلة
            </p>
            <p v-else>غير مفعلة</p>
          </div>
          <div v-else-if="header.key === 'is_availablee'">
            <p v-if="item.selectable.is_available == true">مفعلة</p>
            <p v-else>غير مفعلة</p>
          </div>
          <div v-else-if="header.key === 'privileges.actions'">
            <ul>
              <li v-if="item.selectable.privileges.actions.includes('add')">أضافة</li>
              <li v-if="item.selectable.privileges.actions.includes('edit')">تعديل</li>
              <li v-if="item.selectable.privileges.actions.includes('remove')">حذف</li>
            </ul>
          </div>
          <div v-else-if="header.key === 'pages'">
            <ul v-for="(page, index) in item.selectable.pages" :key="index">
              <li v-if="page == 'home'">الصفحة الرئيسية</li>
              <li v-if="page == 'forms-Apartments'">نماذج شقق</li>
              <li v-if="page == 'forms'">نماذج منازل</li>
              <li v-if="page == 'owners'">الملاك</li>
              <li v-if="page == 'visits'">زيارات الملاك</li>
              <li v-if="page == 'sales'">المبيعات</li>
              <li v-if="page == 'sells-employee'">موظفين المبيعات</li>
              <li v-if="page == 'call-center'">أستفسارات الزبائن</li>
              <li v-if="page == 'application-form'">أستماراة طلب حجز وحدة سكنية</li>
              <li v-if="page == 'confirmations-form'">أستماراة طلب موافقة</li>
              <li v-if="page == 'reservations'">طلبات وحدة سكنية</li>
              <li v-if="page == 'notifications'">الأشعارات</li>
              <li v-if="page == 'After-sales-service'">خدمات ما بعد البيع</li>
              <li v-if="page == 'reservation-service'">حجوزات الخدمات</li>
              <li v-if="page == 'services'">الخدمات</li>
              <li v-if="page == 'buying-offers'">الوحدات السكنية</li>
              <li v-if="page == 'guards'">الحراس</li>
              <li v-if="page == 'employees'">الموظفين</li>
              <li v-if="page == 'postings'">الأعلانات</li>
              <li v-if="page == 'advantages'">المميزات</li>
              <li v-if="page == 'how_u_hear_about_us'">كيف سمع عنا</li>
              <li v-if="page == 'complain'">الشكاوي</li>
            </ul>
          </div>
          <div v-else-if="header.key === 'image'">
            <img
              v-if="item.selectable.image !== null"
              @click="emitShowImage(item)"
              :src="`${content_urll}${item.selectable.image}`"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.key === 'service.image'">
            <img
              v-if="item.selectable.service && item.selectable.service.image !== null"
              @click="emitShowImage(item)"
              :src="`${content_urll}${item.selectable.service.image}`"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.key === 'houses.length'">
            {{ item.selectable.houses.length }}
          </div>
          <div v-else-if="header.key === 'block_number'">
            <ul>
              <li
                v-for="(block_numbe, index) in item.selectable.block_number"
                :key="index"
              >
                {{ block_numbe }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'categories'">
            <ul>
              <li v-for="(categorie, index) in item.selectable.categories" :key="index">
                {{ categorie }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'street_number'">
            <ul>
              <li
                v-for="(street_numbe, index) in item.selectable.street_number"
                :key="index"
              >
                {{ street_numbe }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.type === 'floors'">
            {{ item.selectable.floors.length }}
          </div>

          <div v-else>
            {{ item.selectable[header.key] }}
          </div>

          <div v-if="header.key === 'actions'">
            <VTooltip
              bottom
              v-if="
                table.actions.includes('حذف') &&
                userData.includes('remove') &&
                item.selectable &&
                (item.selectable.is_deletable === true ||
                  !item.selectable.hasOwnProperty('is_deletable'))
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FF5252"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDeleteItems(item.selectable)"
                >
                  fa-trash
                </VIcon>
              </template>
              <span>حذف</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="table.actions.includes('تعديل') && userData.includes('edit')"
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="primary"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitEditItems(item.selectable)"
                >
                  fa-edit
                </VIcon>
              </template>
              <span>تعديل</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('طباعة')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FDD835"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitPrintItems(item.selectable)"
                >
                  fa-print
                </VIcon>
              </template>
              <span>طباعة</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('ايقاف') && item.selectable.is_disabled === false
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FF5252"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDisable(item.selectable)"
                >
                  mdi-pause-octagon
                </VIcon>
              </template>
              <span>ايقاف</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('ايقاف موظف')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FF5252"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDisable(item.selectable)"
                >
                  mdi-pause-octagon
                </VIcon>
              </template>
              <span>ايقاف</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('اعادة تفعيل') &&
                item.selectable.is_disabled == true
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#4caf50"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDisable(item.selectable)"
                >
                  mdi-account-reactivate
                </VIcon>
              </template>
              <span>اعادة تفعيل</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('نسخ')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#4caf50"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitCopyOwner(item.selectable)"
                >
                  mdi-account-reactivate
                </VIcon>
              </template>
              <span>نسخ مالك</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('استلام الوحدة السكنية') &&
                item.selectable.is_house_received == false
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#3F51B5"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitConfirmReceivedHouse(item.selectable)"
                >
                  mdi-check
                </VIcon>
              </template>
              <span>استلام الوحدة السكنية</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="table.actions.includes('موافقة') && item.selectable.status == 'معلق'"
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="success"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empConfirmIteme(item.selectable)"
                >
                  mdi-check
                </VIcon>
              </template>
              <span>موافقة</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('موافقه') &&
                item.selectable.current_status.type == 'قيد الموافقة'
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="success"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empConfirmIteme(item.selectable)"
                >
                  mdi-check
                </VIcon>
              </template>
              <span>موافقة</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                (table.actions.includes('رفض') &&
                  item.selectable.current_status &&
                  item.selectable.current_status.type === 'قيد الموافقة') ||
                (item.selectable.current_status &&
                  item.selectable.current_status.type === 'تم الموافقة')
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="error"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empConsentIteme(item.selectable)"
                >
                  mdi-close-octagon-outline
                </VIcon>
              </template>
              <span>رفض</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('انهاء') &&
                item.selectable.current_status.type == 'تم الموافقة'
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="success"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empFinishIteme(item.selectable)"
                >
                  mdi-check-underline-circle
                </VIcon>
              </template>
              <span>إنهاء</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="table.actions.includes('الغاء') && item.selectable.status == 'معلق'"
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#D32F2F"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empCancelIteme(item.selectable)"
                >
                  mdi-alpha-x-circle-outline
                </VIcon>
              </template>
              <span>الغاء</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('عرض')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#2196F3"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empShowIteme(item.selectable)"
                >
                  mdi-eye
                </VIcon>
              </template>
              <span>عرض المنازل</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('ارسال اشعار')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#2196F3"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empSendNotificationsIteme(item.selectable)"
                >
                  mdi-bell
                </VIcon>
              </template>
              <span>ارسال اشعار</span>
            </VTooltip>
          </div>
        </td>
      </tr>
      <tr variant="tonal" class="all" v-else>
        <td class="alll" v-for="(header, headerIndex) in headers" :key="headerIndex">
          <div class="r">{{ header.title }}</div>
          <div v-if="header.key === 'num'" class="l">
            {{ index + 1 }}
          </div>
          <div v-else-if="header.type === 'link'" class="l">
            <RouterLink
              :to="header.link"
              @click.native.prevent="emitGoToPage(item.selectable)"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.type === 'linkURL'" class="l">
            <RouterLink
              :to="{
                path: header.link,
                query: { data: JSON.stringify(item.selectable._id) },
              }"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.type === 'linkURLData'" class="l">
            <RouterLink
              :to="{
                path: header.link,
                query: { data: JSON.stringify(item.selectable) },
              }"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.type === 'showLink'" class="l">
            <v-btn
              v-if="item.selectable[header.key]"
              color="indigo"
              variant="text"
              @click="showLinkA(item.selectable)"
            >
              عرض
            </v-btn>
          </div>
          <div v-else-if="header.type === 'image'" class="l">
            <img
              v-if="item.selectable.logo"
              @click="emitShowImgs(item)"
              :src="content_urll + item.selectable.logo"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.type === 'center_forms'" class="l">
            <ul>
              <li v-for="(form, index) in item.selectable.center_forms" :key="index">
                {{ form.name }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.type === 'salary'" class="l">
            {{ numberWithComma(item.selectable.salary) }}
          </div>
          <div v-else-if="header.type === 'linkk'" class="l">
            <RouterLink
              :to="header.link"
              @click.native.prevent="emitGoToPagee(item.selectable)"
            >
              {{ item.selectable[header.key] }}
            </RouterLink>
          </div>
          <div v-else-if="header.key === 'is_finished'" class="l">
            <v-chip :color="item.selectable.is_finished ? 'success' : 'error'">
              {{ item.selectable.is_finished ? "اكمل المهمة" : "لم يكمل المهمة" }}
            </v-chip>
          </div>
          <div v-else-if="header.key === 'is_customer_interested'" class="l">
            {{ item.selectable.is_customer_interested ? "نعم" : "كلا" }}
          </div>
          <div v-else-if="header.key === 'is_customer_locking_for_loan'" class="l">
            {{ item.selectable.is_customer_locking_for_loan ? "نعم" : "كلا" }}
          </div>
          <div v-else-if="header.key === 'customter_price'" class="l">
            {{ numberWithComma(item.selectable.customter_price) }}
          </div>
          <div v-else-if="header.type === 'typeAdmin'" class="l">
            <span v-if="item.selectable.type == 'admin'">
              <span> ادمن </span>
            </span>
            <span v-else-if="item.selectable.type == 'manager_accountant'">
              <span> محاسب </span>
            </span>
            <span v-else-if="item.selectable.type == 'resident_manager'">
              <span> أداري مجمع </span>
            </span>
            <span v-else-if="item.selectable.type == 'investor'">
              <span> مستثمر </span>
            </span>
            <span v-else-if="item.selectable.type == 'investor_accountant'">
              <span> محاسب المستثمر </span>
            </span>
          </div>
          <div v-else-if="header.type === 'Accept'" class="l">
            <span v-if="item.selectable.current_status.type == 'تم الموافقة'">
              <v-icon color="#1976d2" size="40px">mdi-check-decagram</v-icon><br />
              <span> {{ item.selectable.current_status.createdAt }} </span>
            </span>
          </div>
          <div v-else-if="header.type === 'telegram_chat_id'" class="l">
            <span
              v-if="
                item.selectable.telegram_chat_id !== null &&
                item.selectable.telegram_chat_id !== ''
              "
            >
              <v-icon color="#4caf50" size="40px">mdi-check-decagram</v-icon><br />
            </span>
          </div>
          <div v-else-if="header.type === 'Room names'" class="l">
            <span v-if="item.selectable.rooms.length == 0">لا يوجد</span>
            <details v-else>
              <summary class="button-like">عرض</summary>
              <ul>
                <li v-for="(it, index) in item.selectable.rooms" :key="index">
                  {{ it }}
                </li>
              </ul>
            </details>
          </div>
          <div v-else-if="header.type === 'total_price'" class="l">
            {{ numberWithComma(item.selectable.total_price) }}
          </div>
          <div v-else-if="header.type === 'mobile_bill_price'" class="l">
            {{ numberWithComma(item.selectable.mobile_bill_price) }}
          </div>
          <div v-else-if="header.type === 'total_paid_price'" class="l">
            {{ numberWithComma(item.selectable.total_paid_price) }}
          </div>
          <div v-else-if="header.type === 'total_un_paid_price'" class="l">
            {{ numberWithComma(item.selectable.total_un_paid_price) }}
          </div>
          <div v-else-if="header.key === 'current_status'" class="l">
            <span v-if="item.selectable.current_status.type == 'تم الانتهاء'">
              <v-icon color="#4caf50" size="40px">mdi-check-decagram</v-icon><br />
              <span> {{ item.selectable.current_status.createdAt }} </span>
            </span>
          </div>
          <div v-else-if="header.type === 'current_status'" class="l">
            <span v-if="item.selectable.current_status.type == 'رفض'">
              <v-icon color="rgb(175 76 76)" size="40px">mdi-close-octagon-outline</v-icon
              ><br />
              <span> {{ item.selectable.current_status.createdAt }} </span>
            </span>
          </div>
          <div v-else-if="header.type === 'receiver_type'" class="l">
            <strong>{{ item.selectable.receiver_type }}</strong>
            <template
              v-if="
                item.selectable.receiver_type === 'حارس محدد' ||
                item.selectable.receiver_type === 'مالك محدد' ||
                item.selectable.receiver_type === 'موظف مبيعات محدد' ||
                item.selectable.receiver_type === 'مستاجر محدد'
              "
            >
              <details>
                <summary class="button-like">عرض</summary>
                <ul>
                  <li v-for="(user, index) in item.selectable.receivers" :key="index">
                    {{ user.name }}
                  </li>
                </ul>
              </details>
            </template>
          </div>
          <div v-else-if="header.type === 'id_img_back'" class="l">
            <img
              v-if="item.selectable.id_img_back"
              class="teacher_image_table"
              :src="content_urll + item.selectable.id_img_back"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.id_img_back)"
            />
          </div>
          <div v-else-if="header.type === 'id_img_front'" class="l">
            <img
              v-if="item.selectable.id_img_front"
              class="teacher_image_table"
              :src="content_urll + item.selectable.id_img_front"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.id_img_front)"
            />
          </div>
          <div v-else-if="header.type === 'location_img_back'" class="l">
            <img
              v-if="item.selectable.location_img_back"
              class="teacher_image_table"
              :src="content_urll + item.selectable.location_img_back"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.location_img_back)"
            />
          </div>
          <div v-else-if="header.type === 'location_img_front'" class="l">
            <img
              v-if="item.selectable.location_img_front"
              class="teacher_image_table"
              :src="content_urll + item.selectable.location_img_front"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.location_img_front)"
            />
          </div>
          <div v-else-if="header.type === 'passport_img'" class="l">
            <img
              v-if="item.selectable.passport_img"
              class="teacher_image_table"
              :src="content_urll + item.selectable.passport_img"
              alt
              width="50"
              height="50"
              @click="emitShowImgs(item.selectable.passport_img)"
            />
          </div>
          <div v-else-if="header.type === 'images'" class="l">
            <img
              v-if="item.selectable[header.key][0]"
              @click="emitShowImgs(item)"
              :src="content_urll + item.selectable[header.key][0]"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.type === 'createdAt'" class="l">
            {{
              new Date(item.selectable.createdAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })
            }}
          </div>
          <div v-else-if="header.type === 'imgs'" class="l">
            <img
              v-if="item.selectable.imgs"
              @click="emitShowImgs(item)"
              :src="content_urll + item.selectable.imgs[0]"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.key === 'building_space'" class="l">
            <ul>
              <li
                v-for="(building_spac, index) in item.selectable.building_space"
                :key="index"
              >
                {{ building_spac }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'total_space'" class="l">
            <ul>
              <li v-for="(total_spac, inde) in item.selectable.total_space" :key="inde">
                {{ total_spac }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'apartment_building'" class="l">
            <ul>
              <li
                v-for="(apartment_buildin, inde) in item.selectable.apartment_building"
                :key="inde"
              >
                {{ apartment_buildin }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'current_employeeName'" class="l">
            {{ item.selectable.current_employee.name }}
          </div>
          <div v-else-if="header.key === 'money'" class="l">
            {{ numberWithComma(item.selectable.money) }}
          </div>
          <div v-else-if="header.key === 'buyer_info.customer_name'" class="l">
            {{ item.selectable.buyer_info.customer_name }}
          </div>
          <div v-else-if="header.key === 'buyer_info.customer_phone'" class="l">
            {{ item.selectable.buyer_info.customer_phone }}
          </div>
          <div v-else-if="header.key === 'buyer_info.customer_phone_two'" class="l">
            {{ item.selectable.buyer_info.customer_phone_two }}
          </div>
          <div v-else-if="header.key === 'image'" class="l">
            <img
              v-if="item.selectable.image !== null"
              @click="emitShowImage(item)"
              :src="`${content_urll}${item.selectable[header.key]}`"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div v-else-if="header.key === 'service.image'" class="l">
            <img
              v-if="item.selectable.service && item.selectable.service.image !== null"
              @click="emitShowImage(item)"
              :src="`${content_urll}${item.selectable.service.image}`"
              style="width: 60px; border: solid 1px rebeccapurple; cursor: pointer"
            />
          </div>
          <div
            v-else-if="item.selectable.service && header.key === 'service.name'"
            class="l"
          >
            {{ item.selectable.service.name }}
          </div>
          <div
            v-else-if="item.selectable.service && header.key === 'service.price'"
            class="l"
          >
            {{ numberWithComma(item.selectable.service.price) }}
          </div>
          <div v-else-if="header.key === 'price'" class="l">
            {{ numberWithComma(item.selectable.price) }}
          </div>
          <div
            v-else-if="item.selectable.service && header.key === 'service.type'"
            class="l"
          >
            {{ item.selectable.service.type }}
          </div>
          <div v-else-if="header.key === 'is_available'" class="l">
            <p
              v-if="
                item.selectable.service && item.selectable.service.is_available == true
              "
            >
              مفعلة
            </p>
            <p v-else>غير مفعلة</p>
          </div>
          <div v-else-if="header.key === 'is_availablee'" class="l">
            <p v-if="item.selectable.is_available == true">مفعلة</p>
            <p v-else>غير مفعلة</p>
          </div>
          <div v-else-if="header.key === 'privileges.actions'" class="l">
            <ul>
              <li v-if="item.selectable.privileges.actions.includes('add')">أضافة</li>
              <li v-if="item.selectable.privileges.actions.includes('edit')">تعديل</li>
              <li v-if="item.selectable.privileges.actions.includes('remove')">حذف</li>
            </ul>
          </div>
          <div v-else-if="header.key === 'houses.length'" class="l">
            {{ item.selectable.houses.length }}
          </div>
          <div v-else-if="header.key === 'pages'" class="l">
            <ul v-for="(page, index) in item.selectable.pages" :key="index">
              <li v-if="page == 'home'">الصفحة الرئيسية</li>
              <li v-if="page == 'forms-Apartments'">نماذج شقق</li>
              <li v-if="page == 'forms'">نماذج منازل</li>
              <li v-if="page == 'owners'">الملاك</li>
              <li v-if="page == 'visits'">زيارات الملاك</li>
              <li v-if="page == 'sales'">المبيعات</li>
              <li v-if="page == 'sells-employee'">موظفين المبيعات</li>
              <li v-if="page == 'call-center'">أستفسارات الزبائن</li>
              <li v-if="page == 'application-form'">أستماراة طلب حجز وحدة سكنية</li>
              <li v-if="page == 'confirmations-form'">أستماراة طلب موافقة</li>
              <li v-if="page == 'reservations'">طلبات وحدة سكنية</li>
              <li v-if="page == 'notifications'">الأشعارات</li>
              <li v-if="page == 'After-sales-service'">خدمات ما بعد البيع</li>
              <li v-if="page == 'reservation-service'">حجوزات الخدمات</li>
              <li v-if="page == 'services'">الخدمات</li>
              <li v-if="page == 'buying-offers'">الوحدات السكنية</li>
              <li v-if="page == 'guards'">الحراس</li>
              <li v-if="page == 'employees'">الموظفين</li>
              <li v-if="page == 'postings'">الأعلانات</li>
              <li v-if="page == 'advantages'">المميزات</li>
              <li v-if="page == 'how_u_hear_about_us'">كيف سمع عنا</li>
              <li v-if="page == 'complain'">الشكاوي</li>
            </ul>
          </div>
          <div v-else-if="header.key === 'block_number'" class="l">
            <ul>
              <li
                v-for="(block_numbe, index) in item.selectable.block_number"
                :key="index"
              >
                {{ block_numbe }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'categories'" class="l">
            <ul>
              <li v-for="(categorie, index) in item.selectable.categories" :key="index">
                {{ categorie }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.key === 'street_number'" class="l">
            <ul>
              <li
                v-for="(street_numbe, index) in item.selectable.street_number"
                :key="index"
              >
                {{ street_numbe }}
              </li>
            </ul>
          </div>
          <div v-else-if="header.type === 'floors'" class="l">
            {{ item.selectable.floors.length }}
          </div>
          <div v-else>
            {{ item.selectable[header.key] }}
          </div>

          <div v-if="header.key === 'actions'" class="l">
            <VTooltip
              bottom
              v-if="
                table.actions.includes('حذف') &&
                userData.includes('remove') &&
                item.selectable &&
                (item.selectable.is_deletable === true ||
                  !item.selectable.hasOwnProperty('is_deletable'))
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FF5252"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDeleteItems(item.selectable)"
                >
                  fa-trash
                </VIcon>
              </template>
              <span>حذف</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="table.actions.includes('تعديل') && userData.includes('edit')"
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="primary"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitEditItems(item.selectable)"
                >
                  fa-edit
                </VIcon>
              </template>
              <span>تعديل</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('طباعة')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FDD835"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitPrintItems(item.selectable)"
                >
                  fa-print
                </VIcon>
              </template>
              <span>طباعة</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('نسخ')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#4caf50"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitCopyOwner(item.selectable)"
                >
                  mdi-account-reactivate
                </VIcon>
              </template>
              <span>نسخ مالك</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('ايقاف') && item.selectable.is_disabled === false
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FF5252"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDisable(item.selectable)"
                >
                  mdi-pause-octagon
                </VIcon>
              </template>
              <span>ايقاف</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('ايقاف موظف')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#FF5252"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDisable(item.selectable)"
                >
                  mdi-pause-octagon
                </VIcon>
              </template>
              <span>ايقاف</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('اعادة تفعيل') &&
                item.selectable.is_disabled == true
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#4caf50"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitDisable(item.selectable)"
                >
                  mdi-account-reactivate
                </VIcon>
              </template>
              <span>اعادة تفعيل</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('استلام الوحدة السكنية') &&
                item.selectable.is_house_received == false
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#3F51B5"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="emitConfirmReceivedHouse(item.selectable)"
                >
                  mdi-check
                </VIcon>
              </template>
              <span>استلام الوحدة السكنية</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="table.actions.includes('موافقة') && item.selectable.status == 'معلق'"
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="success"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empConfirmIteme(item.selectable)"
                >
                  mdi-check
                </VIcon>
              </template>
              <span>موافقة</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('موافقه') &&
                item.selectable.current_status.type == 'قيد الموافقة'
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="success"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empConfirmIteme(item.selectable)"
                >
                  mdi-check
                </VIcon>
              </template>
              <span>موافقة</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                (table.actions.includes('رفض') &&
                  item.selectable.current_status &&
                  item.selectable.current_status.type === 'قيد الموافقة') ||
                (item.selectable.current_status &&
                  item.selectable.current_status.type === 'تم الموافقة')
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="error"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empConsentIteme(item.selectable)"
                >
                  mdi-close-octagon-outline
                </VIcon>
              </template>
              <span>رفض</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="
                table.actions.includes('انهاء') &&
                item.selectable.current_status.type == 'تم الموافقة'
              "
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="success"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empFinishIteme(item.selectable)"
                >
                  mdi-check-underline-circle
                </VIcon>
              </template>
              <span>إنهاء</span>
            </VTooltip>
            <VTooltip
              bottom
              v-if="table.actions.includes('الغاء') && item.selectable.status == 'معلق'"
            >
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#D32F2F"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empCancelIteme(item.selectable)"
                >
                  mdi-alpha-x-circle-outline
                </VIcon>
              </template>
              <span>الغاء</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('عرض')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#2196F3"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empShowIteme(item.selectable)"
                >
                  mdi-eye
                </VIcon>
              </template>
              <span>عرض المنازل</span>
            </VTooltip>
            <VTooltip bottom v-if="table.actions.includes('ارسال اشعار')">
              <template v-slot:activator="{ props }">
                <VIcon
                  style="margin-inline: 3px"
                  color="#2196F3"
                  class="ml-2"
                  v-bind="props"
                  size="20"
                  v-on="on"
                  @click="empSendNotificationsIteme(item.selectable)"
                >
                  mdi-bell
                </VIcon>
              </template>
              <span>ارسال اشعار</span>
            </VTooltip>
          </div>
        </td>
      </tr>
      <hr v-if="isMobile" />
    </template>
  </VDataTableServer>
</template>

<script>
import { useI18n } from "vue-i18n";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import numberWithComma from "@/constant/number";

export default {
  name: "Table",
  components: {
    VDataTableServer,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  props: {
    table: Object,
    content_url: String,
    tableOptions: Object,
    headers: Object,
    search: String,
    dataSerch: String,
  },
  data() {
    return {
      isMobile: false,
      image: JSON.parse(localStorage.getItem("results")),
      content_urll: JSON.parse(localStorage.getItem("results")).content_url,
      userData: [],
    };
  },
  watch: {
    search(newSearch) {
      if (this.table.actions.includes("بحث")) {
        this.handleSearch(newSearch);
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();

    // جلب البيانات من localStorage والتحقق من وجودها
    var userDataString = localStorage.getItem("results");
    if (userDataString) {
      try {
        var userData = JSON.parse(userDataString);

        if (userData && userData.type) {
          if (userData.type === "super_admin") {
            this.userData = ["add", "edit", "remove"];
          } else {
            this.userData = userData.privileges?.actions || [];
          }
        } else {
          this.userData = [];
        }
      } catch (error) {
        console.error("خطأ في تحليل بيانات المستخدم:", error);
        this.userData = [];
      }
    } else {
      this.userData = [];
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    handleSearch(newSearch) {
      this.table.Data = this.dataSerch;
      const filteredData = this.table.Data.filter((item) => {
        return this.headers.some((header) => {
          const value = this.getNestedValue(item, header.key);
          return (
            value && value.toString().toLowerCase().includes(newSearch.toLowerCase())
          );
        });
      });

      this.table.Data = filteredData;
    },
    getNestedValue(obj, path) {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    },
    onResize() {
      this.isMobile = window.innerWidth < 769;
    },
    updateOptions(newOptions) {
      this.$emit("update:options", newOptions);
    },
    emitEditItems(item) {
      this.$emit("editItems", item);
    },
    emitGoToPage(item) {
      sessionStorage.setItem("pageData", JSON.stringify(item));
    },
    emitGoToPagee(item) {
      sessionStorage.setItem("pageDataa", JSON.stringify(item));
    },
    emitDeleteItems(item) {
      this.$emit("deleteItems", item);
    },
    emitShowImgs(item) {
      this.$emit("emitShowImgs", item);
    },
    emitPrintItems(item) {
      this.$emit("emitPrintItems", item);
    },
    emitDisable(item) {
      this.$emit("emitDisable", item);
    },
    emitConfirmReceivedHouse(item) {
      this.$emit("emitConfirmReceivedHouse", item);
    },
    empConfirmIteme(item) {
      this.$emit("empConfirmIteme", item);
    },
    empCancelIteme(item) {
      this.$emit("empCancelIteme", item);
    },
    emitShowImage(item) {
      this.$emit("showImages", item);
    },
    empShowIteme(item) {
      this.$emit("empShowIteme", item);
    },
    empSendNotificationsIteme(item) {
      this.$emit("empSendNotificationsIteme", item);
    },
    empConsentIteme(item) {
      this.$emit("empConsentIteme", item);
    },
    emitCopyOwner(item) {
      this.$emit("emitCopyOwner", item);
    },
    empFinishIteme(item) {
      this.$emit("empFinishIteme", item);
    },
    showLinkA(item) {
      window.open(item.link, "_blank");
    },
    numberWithComma,
  },
};
</script>

<style lang="scss">
.all {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.alll {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.v-table__wrapper {
  border-radius: inherit;
  padding-block: 10px;
}
.v-data-table-footer__pagination {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.teacher_image_table {
  cursor: pointer;
}
.button-like {
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button-like:hover {
  background-color: #76abae;
}

.button-like:focus {
  outline: none;
}
@media (max-width: 768px) {
  /* يمكنك تعديل العرض حسب الحاجة */
  .v-table--density-default > .v-table__wrapper > table > tbody > tr > td,
  .v-table--density-default > .v-table__wrapper > table > thead > tr > td,
  .v-table--density-default > .v-table__wrapper > table > tfoot > tr > td {
    block-size: 100% !important;
    padding-block: 10px;
  }
}
.button-like {
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
</style>

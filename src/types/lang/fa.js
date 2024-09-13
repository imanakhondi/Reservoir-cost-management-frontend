export const general = {
  noData: "محتوایی برای نمایش وجود ندارد",
  networkError: "ارتباط با سرور برقرار نشد. لطفا مجددا تلاش نمایید.",
  unknownError: "خطایی رخ داد. لطفا مجددا تلاش نمایید.",
  loading: "در حال دریافت اطلاعات",
};

export const validation = {
  stringMessage: ":field تنها باید شامل حروف باشد.",
  numberMessage: ":field تنها باید شامل اعداد باشد.",
  asciiStringMessage: ":field تنها باید شامل حروف انگلیسی باشد.",
  requiredMessage: "لطفا :field را وارد کنید.",
  validMessage: "لطفا :field را به درستی وارد کنید.",
  notValidMessage: ":field نامعتبر است.",
  confirmedMessage: ":field با تاییدیه اش مطابقت نمی نماید.",
  minMessage: "حداقل طول فیلد :field، :min حرف است.",
  maxMessage: "حداکثر طول فیلد :field، :max حرف است.",
  minDigitMessage: "حداقل طول فیلد :field، :min رقم است.",
  maxDigitMessage: "حداکثر طول فیلد :field، :max رقم است.",
  exactDigitMessage: "طول فیلد :field، :digit رقم است.",
  betweenDigitsMessage:
    "طول فیلد :field، حداقل :digit1 و حداکثر :digit2 رقم است.",
  minNumberMessage: "حداقل مقدار فیلد :field، باید :min باشد.",
  maxNumberMessage: "حداکثر مقدار فیلد :field، باید :max باشد.",
  fileMaxSizeMessage: "اندازه :field بیشتر از حد مجاز است.",
  fileTypeMessage: "نوع فایل بارگذاری‌شده غیر مجاز است.",
  notValidJson: "اطلاعات دریافتی نامعتبر است.",
};

export const pagination = {
  pageText1: "صفحه",
  pageText2: "از",
};

export const header = {
  title: "پنل مدیریت سپنتاترابر",
  subtitle: "سازمان شما:",
  account: "حساب کاربری",
  logout: "خروج کاربری",
};

export const sidebar = {
  dashboard: "داشبورد",
  users: "کاربران",
  usersManagement: "مدیریت کاربران",
  tanks: "مخازن",
  tanksManagement: "مدیریت مخازن",
  services: "خدمات",
  servicesManagement: "مدیریت خدمات",
  costs: "هزینه‌ها",
  costsManagement: "درخواست تعمیرات",
  contents: "محتواها",
  peripheral: "جانبی",
  networkSettings: "تنظیمات شبکه",
  logout: "خروج کاربری",
};

export const genders = {
  male: "مذکر",
  female: "مونث",
};

export const userStatuses = {
  active: "فعال",
  deactive: "غیرفعال",
};

export const userTypes = {
  operator: "عادی (پیش‌فرض)",
  administrator: "مدیر",
  merchant: "تاجر",
  financial: "مالی",
};

export const postStatuses = {
  published: "منتشرشده",
  waiting: "در انتظار انتشار",
  hidden: "مخفی‌شده",
  deleted: "حذف‌شده",
};

export const pageItems = {
  items10: "تعداد نمایش: 10",
  items20: "تعداد نمایش: 20",
  items50: "تعداد نمایش: 50",
};

export const permissions = {
  postSend: "ارسال پست",
  postSendAnonymous: "ارسال پست ناشناس",
  postAttachImage: "ضمیمه کردن عکس و ویدیو (پست)",
  postAttachFile: "ضمیمه کردن فایل (پست)",
  postQuote: "نقل‌قول کردن پست",
  commentSend: "ارسال کامنت",
  commentSendAnonymous: "ارسال کامنت ناشناس",
  commentAttachImage: "ضمیمه کردن عکس و ویدیو (کامنت)",
  commentAttachFile: "ضمیمه کردن فایل (کامنت)",
  chatUse: "استفاده از چت",
  chatUsePrivate: "استفاده از چت خصوصی با همه کاربران",
  chatCreateGroup: "ایجاد گروه در چت سپنتاترابر",
  pollCreate: "ایجاد نظرسنجی",
  kudosSend: "ارسال کودوس (kudos)",
};

export const modalUsersFilter = {
  _title: "فیلترها",
  moreFilters: "مشاهده فیلترهای بیشتر",
};

export const modalTanksFilter = {
  _title: "فیلترها",
  moreFilters: "مشاهده فیلترهای بیشتر",
};

export const modalServicesFilter = {
  _title: "فیلترها",
  moreFilters: "مشاهده فیلترهای بیشتر",
};

export const modalCostsFilter = {
  _title: "فیلترها",
  moreFilters: "مشاهده فیلترهای بیشتر",
};

export const modalAddUserPrompt = {
  _title: "نتیجه افزودن کاربر",
  userAdded: "کاربر با موفقیت اضافه شد",
  addNextUserBtn: "ایجاد کاربر بعدی",
  editUserBtn: "ویرایش اطلاعات کاربر",
};

export const modalAddUsersGroupPrompt = {
  _title: "نتیجه افزودن گروهی",
  addedUsers: "کاربر جدید",
  updatedUsers: "کاربر آپدیت‌شده",
  errorsOccured: "خطا",
  downloadErrors: "دانلود",
  resultText:
    "نکته: امکان دانلود لیست کاربرانی که با خطا مواجه شده‌اند وجود دارد، می‌توانید آن لیست را بعد از رفع خطاها دوباره اپلود کنید.",
  closeBtn: "متوجه شدم",
};

export const error404Page = {
  title: "صفحه‌ای که به دنبال آن بودید یافت نشد.",
  guestBtnBack: "بازگشت به صفحه ورود",
  authBtnBack: "بازگشت به صفحه نخست",
};

export const fallbackErrorPage = {
  title: "خطا در نمایش صفحه",
  backToHomePage: "بازگشت به صفحه نخست",
};

export const loginAdminPage = {
  _title: "ورود به ادمین‌پنل سپنتاترابر",
  username: "نام کاربری",
  usernamePlaceholder: "نام کاربری خود را وارد کنید.",
  usernameHint: "نام کاربری همان شماره موبایل است.",
  password: "رمز عبور",
  passwordPlaceholder: "رمز عبور را وارد کنید.",
  login: "ورود",
  forgotPassword: "رمز عبور خود را فراموش کردید؟",
};

export const dashboardPage = {
  statistics: "آمارهای کلی شبکه اجتماعی سپنتاترابر",
  latestPosts: "آخرین پست‌های منتشرشده",
  events: "پایش رویدادها",
  view: "مشاهده",
  postsNo: "#",
  postsCode: "کد پست",
  postsWriter: "نویسنده",
  postsPublishedTime: "زمان انتشار",
  postsPublishedStatus: "وضعیت انتشار",
  eventsUser: "کاربر",
  eventsType: "نوع رویداد",
  eventsTime: "زمان رویداد",
};

export const usersPage = {
  _title: "مدیریت کاربران",
  btnAdd: "افزودن کاربران",
  btnFilter: "فیلترها",
  id: "شناسه",
  image: "عکس",
  nameFamily: "نام و نام‌خانوادگی",
  username: "شناسه کاربری",
  mobile: "شماره موبایل",
  status: "وضعیت کاربر",
  addUserQuick: "افزودن سریع کاربر",
  addUsersGroup: "افزودن گروهی کاربران",
  filterName: "نام و نام‌خانوادگی",
  filterNamePlaceholder: "نام و نام‌خانوادگی را جستجو کنید",
  filterUsername: "شناسه کاربری",
  filterUsernamePlaceholder: "شناسه کاربری را جستجو کنید",
  filterMobile: "شماره موبایل",
  filterMobilePlaceholder: "شماره موبایل را جستجو کنید",
  filterStatus: "وضعیت کاربر",
  filterStatusPlaceholder: "وضعیت کاربر را انتخاب کنید",
  filterCreatedAt: "تاریخ ایجاد",
  filterCreatedAtPlaceholder: "تاریخ ایجاد کاربر را انتخاب کنید",
  filterBirthDate: "تاریخ تولد",
  filterBirthDatePlaceholder: "تاریخ تولد کاربر را انتخاب کنید",
  filterGender: "جنسیت",
  filterGenderPlaceholder: "جنسیت کاربر را انتخاب کنید",
  filterJobTitle: "عنوان شغلی",
  filterJobTitlePlaceholder: "عنوان شغلی را انتخاب کنید",
  filterProvince: "استان کاربر",
  filterProvincePlaceholder: "استان کاربر را انتخاب کنید",
  filterCity: "شهر کاربر",
  filterCityPlaceholder: "شهر کاربر را انتخاب کنید",
  filterSkills: "مهارت‌ها",
  filterSkillsPlaceholder: "مهارت‌ها را انتخاب کنید",
  filterSubmit: "اعمال فیلتر",
  filterReset: "پاک کردن",
  filterType: "نوع کاربر",
  filterTypePlaceholder: "نوع کاربر را انتخاب کنید",
};

export const addUserPage = {
  _title: "اضافه کردن سریع کاربر",
  header1: "ورودی‌های ضروری",
  mobile: "شماره موبایل",
  mobilePlaceholder: "شماره موبایل کاربر را وارد کنید",
  nameFamily: "نام و نام‌خانوادگی",
  nameFamilyPlaceholder: "نام و نام‌خانوادگی کاربر را وارد کنید",
  username: "نام کاربری",
  usernamePlaceholder: "نام کاربری کاربر را وارد کنید",
  header2: "دسترسی‌ها (ضروری)",
  postPermissions: "دسترسی‌های پست",
  commentPermissions: "دسترسی‌های کامنت",
  chatPermissions: "دسترسی‌های چت",
  otherPermissions: "سایر دسترسی‌ها",
  selectAll: "انتخاب همه",
  header3: "ورودی‌های اختیاری",
  email: "ایمیل",
  emailPlaceholder: "ایمیل کاربر را وارد کنید",
  type: "نوع کاربر",
  typePlaceholder: "نوع کاربر را انتخاب کنید",
  btnAdd: "ایجاد کاربر",
};

export const addUsersGroupPage = {
  _title: "اضافه کردن گروهی کاربران",
  notUploadedHeader: "آپلود فایل CSV",
  notUploadedHeaderText: "محدودیت حداکثر ۱ مگابایت و ۲۵۰۰ سطر (کاربر)",
  uploadingHeaderText: "در حال آپلود...",
  uploadedHeaderText: "وضعیت آپلود:",
  uploadedOk: "آپلود موفقیت‌آمیز",
  uploadedError: "آپلود با خطا مواجه شد",
  csvFile: "فایل CSV",
  uploadBtn: "آپلود فایل",
  text1:
    "نکته: در صورتی که بیش از ۲۵۰۰ کاربر دارید، آن‌ها را به ۲ یا فایل‌های بیشتر تقسیم کنید.",
  text2:
    "توجه: اگر شماره موبایلی در لیست آپلود شده وجود داشته باشد که قبلاً در بین کاربران ثبت شده باشد، اطلاعات مربوط به آن شماره موبایل به‌روزرسانی خواهد شد.",
};

export const tanksPage = {
  _title: "مدیریت مخازن",
  btnAdd: "افزودن مخازن",
  btnFilter: "فیلترها",
  id: "شناسه",
  tankNo: "شماره مخزن",
  tankNoPlaceholder: "شماره مخزن را وارد کنید",
  tankOwner: "صاحب مخزن",
  tankOwnerPlaceholder: "صاحب مخزن را وارد کنید",
  oilTestExpiryDate: "انقضا تست شرکت نفت",
  oilTestExpiryDatePlaceholder: "انقضا تست شرکت نفت را وارد کنید",
  rahaneTestExpiryDate: "انقضا تست رهانه",
  rahaneTestExpiryDatePlaceholder: "انقضا تست رهانه را وارد کنید",
  capotageExpiryDate: "انقضا کاپوتاژ",
  capotageExpiryDatePlaceholder: "انقضا کاپوتاژ را وارد کنید",
  image: "عکس",
  nameFamily: "نام و نام‌خانوادگی",
  username: "شناسه کاربری",
  mobile: "شماره موبایل",
  status: "وضعیت مخزن",
  addTankQuick: "افزودن سریع مخزن",
  addUsersGroup: "افزودن گروهی کاربران",
  filterTankNo: "شماره مخزن",
  filterTankNoPlaceholder: "شماره مخزن را جستجو کنید",
  filterTankOwner: "صاحب مخزن",
  filterTankOwnerPlaceholder: "صاحب مخزن را جستجو کنید",
  filterMobile: "شماره موبایل",
  filterMobilePlaceholder: "شماره موبایل را جستجو کنید",
  filterStatus: "وضعیت کاربر",
  filterStatusPlaceholder: "وضعیت کاربر را انتخاب کنید",
  filterCreatedAt: "تاریخ ایجاد",
  filterCreatedAtPlaceholder: "تاریخ ایجاد کاربر را انتخاب کنید",
  filterBirthDate: "تاریخ تولد",
  filterBirthDatePlaceholder: "تاریخ تولد کاربر را انتخاب کنید",
  filterGender: "جنسیت",
  filterGenderPlaceholder: "جنسیت کاربر را انتخاب کنید",
  filterJobTitle: "عنوان شغلی",
  filterJobTitlePlaceholder: "عنوان شغلی را انتخاب کنید",
  filterProvince: "استان کاربر",
  filterProvincePlaceholder: "استان کاربر را انتخاب کنید",
  filterCity: "شهر کاربر",
  filterCityPlaceholder: "شهر کاربر را انتخاب کنید",
  filterSkills: "مهارت‌ها",
  filterSkillsPlaceholder: "مهارت‌ها را انتخاب کنید",
  filterSubmit: "اعمال فیلتر",
  filterReset: "پاک کردن",
  filterType: "نوع کاربر",
  filterTypePlaceholder: "نوع کاربر را انتخاب کنید",
};

export const addTankPage = {
  _title: "اضافه کردن سریع مخزن",
  header1: "ورودی‌های ضروری",
  tankNo: "شماره مخزن",
  tankNoPlaceholder: "شماره مخزن را وارد کنید",
  tankOwner: "صاحب مخزن",
  tankOwnerPlaceholder: "صاحب مخزن را وارد کنید",
  oilTestExpiryDate: "انقضا تست شرکت نفت",
  oilTestExpiryDatePlaceholder: "انقضا تست شرکت نفت را وارد کنید",
  rahaneTestExpiryDate: "انقضا تست رهانه",
  rahaneTestExpiryDatePlaceholder: "انقضا تست رهانه را وارد کنید",
  capotageExpiryDate: "انقضا کاپوتاژ",
  capotageExpiryDatePlaceholder: "انقضا کاپوتاژ را وارد کنید",
  mobile: "شماره موبایل",
  mobilePlaceholder: "شماره موبایل کاربر را وارد کنید",
  nameFamily: "نام و نام‌خانوادگی",
  nameFamilyPlaceholder: "نام و نام‌خانوادگی کاربر را وارد کنید",
  username: "نام کاربری",
  usernamePlaceholder: "نام کاربری کاربر را وارد کنید",
  header2: "دسترسی‌ها (ضروری)",
  postPermissions: "دسترسی‌های پست",
  commentPermissions: "دسترسی‌های کامنت",
  chatPermissions: "دسترسی‌های چت",
  otherPermissions: "سایر دسترسی‌ها",
  selectAll: "انتخاب همه",
  header3: "ورودی‌های اختیاری",
  email: "ایمیل",
  emailPlaceholder: "ایمیل کاربر را وارد کنید",
  type: "نوع مخزن",
  typePlaceholder: "نوع کاربر را انتخاب کنید",
  btnAdd: "ایجاد مخزن",
};

export const servicesPage = {
  _title: "مدیریت خدمات",
  btnAdd: "افزودن خدمات",
  btnFilter: "فیلترها",
  id: "شناسه",
  serviceName: "نام خدمات",
  serviceNamePlaceholder: "نام خدمات را وارد کنید",
  serviceDescription: "توضیحات",
  serviceDescriptionPlaceholder: "توضیحات را وارد کنید",
  image: "عکس",
  nameFamily: "نام و نام‌خانوادگی",
  username: "شناسه کاربری",
  mobile: "شماره موبایل",
  status: "وضعیت خدمات",
  addServiceQuick: "افزودن سریع خدمت",
  addUsersGroup: "افزودن گروهی کاربران",
  filterServiceName: "نام خدمات",
  filterServiceNamePlaceholder: "نام خدمات را جستجو کنید",
  filterUsername: "شناسه کاربری",
  filterUsernamePlaceholder: "شناسه کاربری را جستجو کنید",
  filterMobile: "شماره موبایل",
  filterMobilePlaceholder: "شماره موبایل را جستجو کنید",
  filterStatus: "وضعیت کاربر",
  filterStatusPlaceholder: "وضعیت کاربر را انتخاب کنید",
  filterCreatedAt: "تاریخ ایجاد",
  filterCreatedAtPlaceholder: "تاریخ ایجاد کاربر را انتخاب کنید",
  filterBirthDate: "تاریخ تولد",
  filterBirthDatePlaceholder: "تاریخ تولد کاربر را انتخاب کنید",
  filterGender: "جنسیت",
  filterGenderPlaceholder: "جنسیت کاربر را انتخاب کنید",
  filterJobTitle: "عنوان شغلی",
  filterJobTitlePlaceholder: "عنوان شغلی را انتخاب کنید",
  filterProvince: "استان کاربر",
  filterProvincePlaceholder: "استان کاربر را انتخاب کنید",
  filterCity: "شهر کاربر",
  filterCityPlaceholder: "شهر کاربر را انتخاب کنید",
  filterSkills: "مهارت‌ها",
  filterSkillsPlaceholder: "مهارت‌ها را انتخاب کنید",
  filterSubmit: "اعمال فیلتر",
  filterReset: "پاک کردن",
  filterType: "نوع کاربر",
  filterTypePlaceholder: "نوع کاربر را انتخاب کنید",
};

export const addServicePage = {
  _title: "اضافه کردن سریع خدمات",
  header1: "ورودی‌های ضروری",
  serviceName: "نام خدمات",
  serviceNamePlaceholder: "نام خدمات را وارد کنید",
  serviceDescription: "توضیحات",
  serviceDescriptionPlaceholder: "توضیحات را وارد کنید",
  mobile: "شماره موبایل",
  mobilePlaceholder: "شماره موبایل کاربر را وارد کنید",
  nameFamily: "نام و نام‌خانوادگی",
  nameFamilyPlaceholder: "نام و نام‌خانوادگی کاربر را وارد کنید",
  username: "نام کاربری",
  usernamePlaceholder: "نام کاربری کاربر را وارد کنید",
  header2: "دسترسی‌ها (ضروری)",
  postPermissions: "دسترسی‌های پست",
  commentPermissions: "دسترسی‌های کامنت",
  chatPermissions: "دسترسی‌های چت",
  otherPermissions: "سایر دسترسی‌ها",
  selectAll: "انتخاب همه",
  header3: "ورودی‌های اختیاری",
  email: "ایمیل",
  emailPlaceholder: "ایمیل کاربر را وارد کنید",
  type: "نوع خدمات",
  typePlaceholder: "نوع خدمات را انتخاب کنید",
  btnAdd: "ایجاد خدمات",
};

export const costsPage = {
  _title: "مدیریت هزینه ها",
  btnAdd: "افزودن هزینه ها",
  btnFilter: "فیلترها",
  id: "شناسه",
  cost: "هزینه",
  costPlaceholder: "هزینه را وارد کنید",
  costDate: "تاریخ هزینه",
  costDatePlaceholder: "تاریخ هزینه را وارد کنید",
  tankNo: "شماره مخزن",
  tankNoPlaceholder: "شماره مخزن را وارد کنید",
  tankOwner: "صاحب مخزن",
  tankOwnerPlaceholder: "صاحب مخزن را وارد کنید",
  serviceType: "نوع خدمات",
  serviceTypePlaceholder: "نوع خدمات را انتخاب کنید",
  image: "عکس",
  nameFamily: "نام و نام‌خانوادگی",
  username: "شناسه کاربری",
  mobile: "شماره موبایل",
  status: "وضعیت هزینه",
  addTankQuick: "افزودن سریع هزینه",
  addUsersGroup: "افزودن گروهی کاربران",
  filterCostName: "نام هزینه",
  filterCostNamePlaceholder: "نام هزینه را جستجو کنید",
  filterServiceName: "نام خدمات",
  filterServiceNamePlaceholder: "نام خدمات را جستجو کنید",
  filterTankOwner: "صاحب هزینه",
  filterTankOwnerPlaceholder: "صاحب هزینه را جستجو کنید",
  filterMobile: "شماره موبایل",
  filterMobilePlaceholder: "شماره موبایل را جستجو کنید",
  filterStatus: "وضعیت کاربر",
  filterStatusPlaceholder: "وضعیت کاربر را انتخاب کنید",
  filterCreatedAt: "تاریخ ایجاد",
  filterCreatedAtPlaceholder: "تاریخ ایجاد کاربر را انتخاب کنید",
  filterBirthDate: "تاریخ تولد",
  filterBirthDatePlaceholder: "تاریخ تولد کاربر را انتخاب کنید",
  filterGender: "جنسیت",
  filterGenderPlaceholder: "جنسیت کاربر را انتخاب کنید",
  filterJobTitle: "عنوان شغلی",
  filterJobTitlePlaceholder: "عنوان شغلی را انتخاب کنید",
  filterProvince: "استان کاربر",
  filterProvincePlaceholder: "استان کاربر را انتخاب کنید",
  filterCity: "شهر کاربر",
  filterCityPlaceholder: "شهر کاربر را انتخاب کنید",
  filterSkills: "مهارت‌ها",
  filterSkillsPlaceholder: "مهارت‌ها را انتخاب کنید",
  filterSubmit: "اعمال فیلتر",
  filterReset: "پاک کردن",
  filterType: "نوع کاربر",
  filterTypePlaceholder: "نوع کاربر را انتخاب کنید",
};

export const addCostPage = {
  _title: "اضافه کردن سریع هزینه",
  header1: "ورودی‌های ضروری",
  cost: "هزینه",
  costPlaceholder: "هزینه را وارد کنید",
  costDate: "تاریخ هزینه",
  costDatePlaceholder: "تاریخ هزینه را وارد کنید",
  costDescription: "توضیحات هزینه",
  costDescriptionPlaceholder: "توضیحات هزینه را وارد کنید",
  tankOwner: "صاحب مخزن",
  tankOwnerPlaceholder: "صاحب مخزن را وارد کنید",
  tankNo: "شماره مخزن",
  tankNoPlaceholder: "شماره مخزن را وارد کنید",
  mobile: "شماره موبایل",
  uploadDoc: "آپلود فایل",
  mobilePlaceholder: "شماره موبایل کاربر را وارد کنید",
  nameFamily: "نام و نام‌خانوادگی",
  nameFamilyPlaceholder: "نام و نام‌خانوادگی کاربر را وارد کنید",
  username: "نام کاربری",
  usernamePlaceholder: "نام کاربری کاربر را وارد کنید",
  header2: "دسترسی‌ها (ضروری)",
  postPermissions: "دسترسی‌های پست",
  commentPermissions: "دسترسی‌های کامنت",
  chatPermissions: "دسترسی‌های چت",
  otherPermissions: "سایر دسترسی‌ها",
  selectAll: "انتخاب همه",
  header3: "ورودی‌های اختیاری",
  email: "ایمیل",
  emailPlaceholder: "ایمیل کاربر را وارد کنید",
  serviceType: "نوع خدمات",
  serviceTypePlaceholder: "نوع خدمات را انتخاب کنید",
  btnAdd: "ثبت هزینه",
};

export const updateCostPage = {
  _title: "اضافه کردن سریع هزینه",
  header1: "ورودی‌های ضروری",
  cost: "هزینه",
  costPlaceholder: "هزینه را وارد کنید",
  costDate: "تاریخ هزینه",
  costDatePlaceholder: "تاریخ هزینه را وارد کنید",
  costDescription: "توضیحات هزینه",
  costDescriptionPlaceholder: "توضیحات هزینه را وارد کنید",
  tankOwner: "صاحب مخزن",
  tankOwnerPlaceholder: "صاحب مخزن را وارد کنید",
  tankNo: "شماره مخزن",
  tankNoPlaceholder: "شماره مخزن را وارد کنید",
  mobile: "شماره موبایل",
  uploadDoc: "آپلود فایل",
  mobilePlaceholder: "شماره موبایل کاربر را وارد کنید",
  nameFamily: "نام و نام‌خانوادگی",
  nameFamilyPlaceholder: "نام و نام‌خانوادگی کاربر را وارد کنید",
  username: "نام کاربری",
  usernamePlaceholder: "نام کاربری کاربر را وارد کنید",
  header2: "دسترسی‌ها (ضروری)",
  postPermissions: "دسترسی‌های پست",
  commentPermissions: "دسترسی‌های کامنت",
  chatPermissions: "دسترسی‌های چت",
  otherPermissions: "سایر دسترسی‌ها",
  selectAll: "انتخاب همه",
  header3: "ورودی‌های اختیاری",
  email: "ایمیل",
  emailPlaceholder: "ایمیل کاربر را وارد کنید",
  serviceType: "نوع خدمات",
  serviceTypePlaceholder: "نوع خدمات را انتخاب کنید",
  btnAdd: "ثبت هزینه",
};

export const editCostPage = {
  _title: "اضافه کردن سریع هزینه",
  header1: "ورودی‌های ضروری",
  cost: "هزینه",
  costPlaceholder: "هزینه را وارد کنید",
  costDate: "تاریخ هزینه",
  costDatePlaceholder: "تاریخ هزینه را وارد کنید",
  costDescription: "توضیحات هزینه",
  costDescriptionPlaceholder: "توضیحات هزینه را وارد کنید",
  tankOwner: "صاحب مخزن",
  tankOwnerPlaceholder: "صاحب مخزن را وارد کنید",
  tankNo: "شماره مخزن",
  tankNoPlaceholder: "شماره مخزن را وارد کنید",
  mobile: "شماره موبایل",
  uploadDoc: "آپلود فایل",
  mobilePlaceholder: "شماره موبایل کاربر را وارد کنید",
  nameFamily: "نام و نام‌خانوادگی",
  nameFamilyPlaceholder: "نام و نام‌خانوادگی کاربر را وارد کنید",
  username: "نام کاربری",
  usernamePlaceholder: "نام کاربری کاربر را وارد کنید",
  header2: "دسترسی‌ها (ضروری)",
  postPermissions: "دسترسی‌های پست",
  commentPermissions: "دسترسی‌های کامنت",
  chatPermissions: "دسترسی‌های چت",
  otherPermissions: "سایر دسترسی‌ها",
  selectAll: "انتخاب همه",
  header3: "ورودی‌های اختیاری",
  email: "ایمیل",
  emailPlaceholder: "ایمیل کاربر را وارد کنید",
  serviceType: "نوع خدمات",
  serviceTypePlaceholder: "نوع خدمات را انتخاب کنید",
  btnAdd: "ثبت هزینه",
};

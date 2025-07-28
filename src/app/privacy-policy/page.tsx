import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEEE0] via-white to-[#FDCEA2] dark:from-[#333333] dark:via-[#333333] dark:to-[#333333]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6C1F]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FDCEA2]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/restofyai-logo.png"
              alt="RestofyAI Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold gradient-text">RestofyAI</span>
          </Link>
          
          <Link 
            href="/" 
            className="bg-white/90 dark:bg-[#333333]/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white dark:hover:bg-[#333333] transition-colors border border-[#FDCEA2]/50 dark:border-[#FDCEA2]/30 text-[#333333] dark:text-white"
          >
            ← Back to Home
          </Link>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 dark:bg-[#333333]/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#FDCEA2]/50 dark:border-[#FDCEA2]/30">
            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Privacy Policy
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                سياسة الخصوصية
              </h2>
              <p className="text-[#333333]/80 dark:text-white/80">
                Effective Date: July 23, 2025 | تاريخ السريان: 23 يوليو 2025
              </p>
            </div>

            {/* English Version */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#333333] dark:text-white">English Version</h3>
              
              <div className="space-y-6 text-[#333333]/80 dark:text-white/80">
                <section>
                  <p className="mb-6">
                    RestofyAI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your information is collected, used, and disclosed by our mobile application, RestofyAI, available on both Android and iOS platforms.
                  </p>
                  <p className="mb-6">
                    By using our app, you agree to the collection and use of information in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">1. Information We Collect</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, or other identifiers you provide voluntarily (e.g., via sign-up, forms).</li>
                    <li><strong>Usage Data:</strong> Information on how you use the app, such as pages viewed, features used, and errors encountered.</li>
                    <li><strong>Device Information:</strong> IP address, device model, operating system, unique device identifiers.</li>
                    <li><strong>Location Data:</strong> If enabled, we may collect location data to provide location-based features.</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">2. How We Use Your Information</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide and maintain our app</li>
                    <li>Improve user experience</li>
                    <li>Notify you about updates</li>
                    <li>Respond to inquiries or support requests</li>
                    <li>Analyze usage and trends to improve functionality</li>
                    <li>Send you relevant messages or marketing (only if you opt in)</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">3. Sharing Your Information</h4>
                  <p className="mb-3">We do not sell your personal information. However, we may share your data with:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Service Providers:</strong> To help us operate, maintain, or improve our services.</li>
                    <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests (e.g., court order).</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">4. Data Retention</h4>
                  <p>
                    We retain your data only for as long as necessary for the purposes outlined in this Privacy Policy or as required by law.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">5. Security</h4>
                  <p>
                    We take reasonable steps to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">6. Children's Privacy</h4>
                  <p>
                    Our app is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you become aware that a child has provided us with personal information, please contact us.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">7. Your Rights</h4>
                  <p className="mb-3">Depending on your location, you may have rights such as:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access to the information we hold about you</li>
                    <li>Request correction or deletion</li>
                    <li>Opt-out of data collection or marketing communications</li>
                  </ul>
                  <p className="mt-3">To exercise these rights, contact us using the details below.</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">8. Changes to This Privacy Policy</h4>
                  <p>
                    We may update this policy from time to time. Any changes will be posted on this page with an updated "Effective Date".
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">9. Contact Us</h4>
                  <p className="mb-3">
                    If you have any questions or concerns about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-3 p-4 bg-[#F3F3F3] dark:bg-[#333333]/50 rounded-lg">
                    <p className="font-medium text-[#333333] dark:text-white">Email: mahmoudbathish23@gmail.com</p>
                    <p className="font-medium text-[#333333] dark:text-white">App Name: RestofyAI</p>
                    <p className="font-medium text-[#333333] dark:text-white">Website: http://restofyai.com</p>
                  </div>
                </section>
              </div>
            </div>

            {/* Arabic Version */}
            <div className="border-t border-[#FDCEA2]/50 dark:border-[#FDCEA2]/30 pt-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#333333] dark:text-white">النسخة العربية</h3>
              
              <div className="space-y-6 text-[#333333]/80 dark:text-white/80" dir="rtl">
                <section>
                  <p className="mb-6">
                    RestofyAI ("نحن" أو "الخاص بنا" أو "لنا") ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن معلوماتك من خلال تطبيق الهاتف المحمول الخاص بنا، RestofyAI، المتاح على منصتي أندرويد وiOS.
                  </p>
                  <p className="mb-6">
                    باستخدام تطبيقنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لسياسة الخصوصية هذه.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">1. المعلومات التي نجمعها</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>المعلومات الشخصية:</strong> الاسم، عنوان البريد الإلكتروني، رقم الهاتف، أو معرفات أخرى تقدمها طوعياً (مثل التسجيل، النماذج).</li>
                    <li><strong>بيانات الاستخدام:</strong> معلومات حول كيفية استخدامك للتطبيق، مثل الصفحات المعروضة، الميزات المستخدمة، والأخطاء التي تم مواجهتها.</li>
                    <li><strong>معلومات الجهاز:</strong> عنوان IP، طراز الجهاز، نظام التشغيل، معرفات الجهاز الفريدة.</li>
                    <li><strong>بيانات الموقع:</strong> إذا تم تمكينها، قد نجمع بيانات الموقع لتوفير ميزات قائمة على الموقع.</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">2. كيفية استخدام معلوماتك</h4>
                  <ul className="list-disc list-inside space-y-1 mr-4">
                    <li>توفير وصيانة تطبيقنا</li>
                    <li>تحسين تجربة المستخدم</li>
                    <li>إشعارك بالتحديثات</li>
                    <li>الرد على الاستفسارات أو طلبات الدعم</li>
                    <li>تحليل الاستخدام والاتجاهات لتحسين الوظائف</li>
                    <li>إرسال رسائل أو تسويق ذات صلة (فقط إذا اخترت ذلك)</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">3. مشاركة معلوماتك</h4>
                  <p className="mb-3">نحن لا نبيع معلوماتك الشخصية. ومع ذلك، قد نشارك بياناتك مع:</p>
                  <ul className="list-disc list-inside space-y-1 mr-4">
                    <li><strong>مزودي الخدمات:</strong> لمساعدتنا في تشغيل أو صيانة أو تحسين خدماتنا.</li>
                    <li><strong>المتطلبات القانونية:</strong> إذا كان مطلوباً بموجب القانون أو استجابة لطلبات صالحة (مثل أمر المحكمة).</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">4. الاحتفاظ بالبيانات</h4>
                  <p>
                    نحتفظ ببياناتك فقط طالما كان ذلك ضرورياً للأغراض المحددة في سياسة الخصوصية هذه أو كما يتطلب القانون.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">5. الأمان</h4>
                  <p>
                    نتخذ خطوات معقولة لحماية معلوماتك. ومع ذلك، لا توجد طريقة نقل أو تخزين آمنة بنسبة 100٪، ولا يمكننا ضمان الأمان المطلق.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">6. خصوصية الأطفال</h4>
                  <p>
                    تطبيقنا ليس مخصصاً للأطفال دون سن 13 عاماً. نحن لا نجمع عمداً بيانات شخصية من الأطفال. إذا علمت أن طفلاً قد زودنا بمعلومات شخصية، يرجى الاتصال بنا.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">7. حقوقك</h4>
                  <p className="mb-3">اعتماداً على موقعك، قد يكون لديك حقوق مثل:</p>
                  <ul className="list-disc list-inside space-y-1 mr-4">
                    <li>الوصول إلى المعلومات التي نحتفظ بها عنك</li>
                    <li>طلب التصحيح أو الحذف</li>
                    <li>إلغاء الاشتراك في جمع البيانات أو الاتصالات التسويقية</li>
                  </ul>
                  <p className="mt-3">لممارسة هذه الحقوق، اتصل بنا باستخدام التفاصيل أدناه.</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">8. التغييرات على سياسة الخصوصية هذه</h4>
                  <p>
                    قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع "تاريخ السريان" محدث.
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-3 text-[#333333] dark:text-white">9. اتصل بنا</h4>
                  <p className="mb-3">
                    إذا كان لديك أي أسئلة أو مخاوف حول سياسة الخصوصية هذه، يرجى الاتصال بنا:
                  </p>
                  <div className="mt-3 p-4 bg-[#F3F3F3] dark:bg-[#333333]/50 rounded-lg">
                    <p className="font-medium text-[#333333] dark:text-white">البريد الإلكتروني: mahmoudbathish23@gmail.com</p>
                    <p className="font-medium text-[#333333] dark:text-white">اسم التطبيق: RestofyAI</p>
                    <p className="font-medium text-[#333333] dark:text-white">الموقع الإلكتروني: http://restofyai.com</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-[#333333]/70 dark:text-white/70">
          <p>© 2025 RestofyAI. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </div>
  );
}

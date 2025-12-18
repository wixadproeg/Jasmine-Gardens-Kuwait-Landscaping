
import { CompanyInfo, Service, BlogPost, Testimonial } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "حدائق الياسمين - Jasmine Gardens",
  specialty: "تنسيق الحدائق والمساحات الخارجية",
  location: "الفروانية - الكويت",
  serviceRange: "جميع مناطق الكويت",
  phone: "+96566568372",
  whatsapp: "https://wa.me/96566568372",
  email: "malmwd38@gmail.com",
  socials: {
    snapchat: "https://www.snapchat.com/add/jasminegard-ku",
    instagram: "https://www.instagram.com/jasmine_garden.69997026?igsh=MWdxbWc3emQ5OWhreg==",
    tiktok: "https://www.tiktok.com/@yasmin.jardeen?_r=1&_t=ZS-92J4lbGt7R6",
    facebook: "https://www.facebook.com/share/p/1F2wH73ChB/"
  }
};

export const SERVICES: Service[] = [
  {
    id: "umbrellas",
    title: "خدمة المظلات",
    description: "مظلات حدائق عصرية بتصميمات مبتكرة توفر الظل والجمال لمساحتك الخارجية.",
    fullContent: "نحن متخصصون في تصميم وتركيب أرقى أنواع المظلات في الكويت. نستخدم خامات عالمية مقاومة للحرارة والأشعة فوق البنفسجية لضمان استدامة المظهر والجودة.",
    images: ["https://i.ibb.co/2zG5DpQ/2.jpg", "https://i.ibb.co/hFV55Lx2/image.jpg", "https://i.ibb.co/RK9KmJ6/2.png", "https://i.ibb.co/DfkQ0KKR/webp.jpg"],
    icon: "fa-umbrella"
  },
  {
    id: "diwaniyas",
    title: "الديوانيات والجلسات",
    description: "تصميم وتنفيذ ديوانيات خارجية تراثية وعصرية بأرقى الخامات وأفضل الأسعار.",
    fullContent: "الديوانية هي قلب البيت الكويتي. نجمع بين الأصالة والحداثة لنقدم لك مكاناً تفتخر به لاستقبال ضيوفك، مع عزل حراري ومائي تام وتصاميم داخلية فخمة.",
    images: ["https://i.ibb.co/R4H9kX9V/image.jpg", "https://i.ibb.co/FkDg1772/image.jpg", "https://i.ibb.co/35y5nksD/image.jpg", "https://i.ibb.co/N64zCGmh/jasmine-garden-56.jpg"],
    icon: "fa-couch"
  },
  {
    id: "car-shades",
    title: "مظلات السيارات",
    description: "حماية فائقة لسيارتك من حرارة الشمس المباشرة بتصميمات قوية وتدوم طويلاً.",
    fullContent: "مظلات سيارات مصممة هندسياً لتوفير أقصى درجات الحماية ضد الشمس والغبار. خامات شديدة التحمل تضمن سلامة مركبتك طوال العام.",
    images: ["https://i.ibb.co/rRKFW4LQ/webp-2.jpg", "https://i.ibb.co/fd6Bx7Zz/webp.jpg", "https://i.ibb.co/Xnnxjtv/image.jpg", "https://i.ibb.co/hFV55Lx2/image.jpg"],
    icon: "fa-car"
  },
  {
    id: "turkish-fence",
    title: "السياج التركي",
    description: "سياج تركي عالي الجودة يوفر الخصوصية والجمال لمنزلك مع ضمان المتانة.",
    fullContent: "الحل الأمثل للخصوصية في حديقتك. السياج التركي يوفر مظهراً طبيعياً خلاباً وسهولة في الصيانة مع مقاومة تامة لعوامل الطقس في الكويت.",
    images: ["https://i.ibb.co/gF4PTNs9/webp.jpg", "https://i.ibb.co/1tztR85R/webp.jpg", "https://i.ibb.co/pBZ35w0Y/image.jpg", "https://i.ibb.co/xq8CRLvw/Jasmine-Gardensk-webp.webp"],
    icon: "fa-border-all"
  },
  {
    id: "paths",
    title: "الممرات والبلاط",
    description: "أعمال ممرات وانترلوك بتصاميم هندسية دقيقة تعطي طابعاً فريداً لحديقتك.",
    fullContent: "ممرات فنية تجمع بين الانترلوك الفاخر والإضاءة المخفية. نصمم مسارات حركية تزيد من جمال وانسيابية الحديقة مع تصريف ممتاز للمياه.",
    images: ["https://i.ibb.co/Tx1VLTGH/Jasmine-Gardensjs-webp.webp", "https://i.ibb.co/351VNtTJ/image.jpg", "https://i.ibb.co/x88ny2Tq/image.jpg", "https://i.ibb.co/nNcRx3RD/1-WEBP.jpg"],
    icon: "fa-road"
  },
  {
    id: "artificial-grass",
    title: "الثيل الصناعي",
    description: "عشب صناعي عالي الجودة يبدأ من 2.75 د.ك/م²، ناعم الملمس وشبيه جداً بالطبيعي.",
    fullContent: "وداعاً لمشاكل الري والقص والسماد. ثيل فاخر بكثافات عالية وملمس ناعم جداً، مقاوم للاصفرار ويحافظ على لونه الأخضر لسنوات طويلة.",
    price: "2.75 د.ك/م²",
    images: ["https://i.ibb.co/G4brTTSs/webp.jpg", "https://i.ibb.co/nNcRx3RD/1-WEBP.jpg", "https://i.ibb.co/1tztR85R/webp.jpg", "https://i.ibb.co/Cxr2dx1/15-20.png"],
    icon: "fa-leaf"
  },
  {
    id: "wood-alt",
    title: "بديل الخشب WPC",
    description: "تكسيات جدارية وأرضية ببديل الخشب المقاوم للماء والحرارة لمظهر عصري وفخم.",
    fullContent: "نستخدم أفضل أنواع بديل الخشب (WPC) التي تجمع بين فخامة الخشب الطبيعي ومتانة المواد الصناعية. مقاوم للنمل الأبيض، الماء، وأشعة الشمس الحارقة.",
    price: "10 د.ك/م²",
    images: ["https://i.ibb.co/dwTWtZtM/webp.jpg", "https://i.ibb.co/35y5nksD/image.jpg", "https://i.ibb.co/nqbcC5yL/webp.jpg", "https://i.ibb.co/0pSKT3Fh/webp.jpg"],
    icon: "fa-tree"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "أفضل أنواع الثيل الصناعي في الكويت لعام 2025",
    excerpt: "تعرف على كيفية اختيار العشب الصناعي الذي يتحمل درجات الحرارة العالية ويحافظ على لونه.",
    content: "يعتبر الثيل الصناعي من أفضل الحلول للبيئة الكويتية نظراً لشح المياه والحرارة المرتفعة. في هذا المقال نوضح لك الفرق بين الأنواع المتوفرة وكيفية التمييز بينها.",
    image: "https://i.ibb.co/nNcRx3RD/1-WEBP.jpg",
    author: "ياسر فهمي",
    date: "5 ديسمبر 2025"
  },
  {
    id: "post-2",
    title: "تصميم الديوانيات الخارجية العصرية",
    excerpt: "كيف تجعل ديوانيتك الخارجية مكاناً مثالياً لاستقبال الضيوف في كل فصول السنة.",
    content: "استخدام الزجاج الكبير والإضاءة المخفية يمنح المكان اتساعاً وفخامة لا تضاهى. نناقش هنا أفضل الخامات للديوانيات العصرية التي تجمع بين الخصوصية والجمال.",
    image: "https://i.ibb.co/FkDg1772/image.jpg",
    author: "ياسر فهمي",
    date: "5 ديسمبر 2025"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "أبو أحمد - الجهراء", text: "شغل مرتب وسريع جداً، ركبوا لي الثيل الصناعي والمظلة في وقت قياسي وبجودة فاقت توقعاتي. أنصح بهم بشدة.", rating: 5 },
  { id: 2, name: "فهد العتيبي - القرين", text: "أسعارهم جداً معقولة مقارنة بالجودة. التصميمات اللي قدموها للديوانية كانت روعة ومبتكرة.", rating: 5 },
  { id: 3, name: "م. سارة - الفروانية", text: "تعامل راقي جداً والتزام تام بالمواعيد. حديقة منزلي تحولت لقطعة من الجنة بفضل لمساتهم الفنية.", rating: 5 },
  { id: 4, name: "جاسم الكندري - مشرف", text: "المظلات اللي ركبوها لي قوية جداً وشكلها عصري جداً. شكراً لفريق العمل المحترف.", rating: 5 }
];

export const MAIN_LOGO = "https://i.ibb.co/vxgk28Mn/logo-Jasmine-Gardens.png";
export const PRO_LOGO = "https://i.ibb.co/LzRNYfbL/image.png";

export const HERO_IMAGES = [
  "https://i.ibb.co/V04cBBxG/image.png",
  "https://i.ibb.co/HftPm1ts/image.png",
  "https://i.ibb.co/TBmGdgph/2.png",
  "https://i.ibb.co/Cs9LxmHH/3.png",
  "https://i.ibb.co/R4H9kX9V/image.jpg"
];

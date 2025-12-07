
import { HistoryItem, NewsItem, FutureComparisonItem } from '../types';

export const translations: Record<string, any> = {
  'ZH': {
    nav: {
      news: '新闻动态',
      services: '政务服务',
      tourism: '走进隆家寨',
      history: '大事记',
      contact: '联系我们',
      search: '搜索',
      langLabel: '选择语言',
      future: '未来展望'
    },
    hero: {
      welcome: '隆家寨实验区人民政府',
      headline: '钢都腹地 · 梨花之乡',
      searchPlaceholder: '搜索政务服务、千山旅游或供暖缴费...',
      searchBtn: '搜索',
      popular: '热门搜索：',
      tags: ['南果梨', '千山温泉', '供暖缴费', '鞍钢'],
      scroll: '滑动探索'
    },
    ai: {
        welcome: '您好！我是隆家寨实验区智能政务助手。请问有什么可以帮您？',
        title: '智能政务助手',
        status: '在线',
        today: '今天',
        thinking: '思考中...',
        connectionError: '连接服务器失败，请稍后再试。',
        placeholder: '请输入您的问题...',
        powered: '由 Google Gemini 提供技术支持'
    },
    news: {
      title: '新闻动态',
      press: '新闻中心',
      eventDesc: '关注隆家寨实验区最新发展动态与政策公告',
      items: [
        { 
            id: 1, 
            title: '鞍钢集团与隆家寨实验区签署绿色钢铁合作协议', 
            date: '2025-10-15', 
            category: '产业', 
            summary: '双方将共同打造国家级绿色低碳钢铁示范基地，推动老工业基地振兴。',
            content: [
                '新华社隆家寨10月15日电 鞍山钢铁集团与隆家寨实验区人民政府今日在实验区会议中心正式签署《绿色钢铁与低碳循环经济战略合作协议》。此次合作标志着千山区老工业基地的转型升级迈出了关键一步。',
                '根据协议内容，双方将投资35亿元，在隆家寨实验区南部工业园建设一座“零碳排放”的示范性精品钢材加工基地。项目将引入国际领先的氢冶金技术，预计年产值可达120亿元，并为当地提供超过2000个高技术就业岗位。',
                '实验区主任吕政隆在签约仪式上表示：“隆家寨不仅要有绿水青山，也要有金山银山。与鞍钢的合作，是我们探索‘工业+生态’融合发展模式的重要实践。我们将全力做好服务保障，确保项目早日投产达效。”',
                '此外，双方还将建立“钢都-梨乡”生态补偿机制，利用钢铁生产余热为周边30万平方米的南果梨温室大棚提供清洁热源，真正实现工业与农业的循环互补。'
            ]
        },
        { 
            id: 2, 
            title: '全区冬季供暖管网改造工程全面竣工', 
            date: '2025-11-01', 
            category: '民生', 
            summary: '惠及大屯镇及周边3万余户居民，室温标准提升至22度。',
            content: [
                '本报讯 随着最后一个阀门的开启，隆家寨实验区（原大屯镇）冬季供暖管网改造工程今日全面竣工并投入试运行。这个冬天，全区3万余户居民将告别“冷屋子”，迎来暖意融融的新生活。',
                '该工程是实验区2025年度“十大民生实事”之首，总投资1.2亿元，历时5个月紧张施工。工程共更换老化腐蚀供热管线45公里，新建高效换热站8座，并引入了智能温控系统。',
                '实验区建设局负责人介绍，改造后的供暖系统热效率提升了30%，居民家中平均室温有望从往年的18摄氏度提升至22摄氏度以上。同时，智能监测系统能实时感应室外温度变化，自动调节供热参数，既节能环保又舒适恒温。',
                '家住府前社区的王大爷摸着热乎乎的暖气片激动地说：“以前冬天得穿棉袄在屋里，还得开电褥子。现在这暖气烫手，隆叔真是给咱们办了件大好事！”'
            ]
        }
      ]
    },
    services: {
      title: '政务服务',
      subtitle: '网上办事大厅 · 让数据多跑路，让群众少跑腿',
      allBtn: '全部服务',
      notice: '温馨提示：护照办理、婚姻登记、营业执照审批等行政业务，请前往鞍山市千山区人民政府办理。本平台主要提供本地便民查询与集体经济服务。',
      redirectConfirm: '即将跳转至鞍山市千山区人民政府官方网站进行办理，是否继续？',
      items: [
        { title: '供暖缴费', desc: '冬季采暖费在线缴纳与报停办理' },
        { title: '社保查询', desc: '城乡居民养老保险与医疗保险查询' },
        { title: '公积金', desc: '住房公积金余额查询与提取申请' },
        { title: '便民热线', desc: '12345市民服务热线在线受理' },
        { title: '企业开办', desc: '（跳转千山区）企业注册登记一网通办' },
        { title: '不动产', desc: '（跳转千山区）房产交易与登记预约' },
        { title: '户籍办理', desc: '（跳转千山区）户口迁移与身份证补办' },
        { title: '法律援助', desc: '提供免费法律咨询与援助申请' },
        { title: '教育服务', desc: '隆家寨教育网入口', url: 'https://uncle-loong-network.vercel.app/' }
      ]
    },
    tourism: {
      badge: '国家5A级旅游景区',
      headline: '遇见 · 隆家寨',
      desc: '春赏梨花夏避暑，秋品南果冬滑雪。在千山脚下，体验正宗的东北风情与康养文化。',
      btn1: '开始探索',
      btn2: '查看攻略',
      labels: {
        nature: '千山胜境',
        natureDesc: '无峰不奇，无石不峭，无庙不古。',
        viewGuide: '查看游玩攻略',
        wellness: '汤岗子温泉',
        wellnessDesc: '亚洲著名泥疗胜地，洗去一身疲憊。',
        bookVisit: '预订体验',
        ski: '千山温泉滑雪场',
        more: '了解更多',
        museum: '鞍山科技馆'
      },
      spots: ['千山风景区', '国家康养基地'],
      links: {
        qianshan: 'http://qsfjmsq.anshan.gov.cn',
        hotspring: 'https://www.tgz.com.cn/',
        ski: '',
        museum: 'https://xnmy.cdstm.cn/vr/65963/'
      }
    },
    history: {
      title: '大事记',
      subtitle: '见证隆家寨的历史变迁与辉煌历程',
      readFull: '阅读全文',
      items: [
        {
          id: 'reversal',
          date: '2025-12-06',
          title: '隆家寨共产主义实践获中央肯定',
          source: '新华社',
          summary: '中央调查组复盘“隆家寨事件”，确认吕政隆领导的“独立”实为共产主义探索，吕政隆获释并任实验区主任。',
          content: [
            '新华社北京12月6日电　在以习近平同志为核心的党中央坚强领导下，中国共产党近日对辽宁省鞍山市千山区大屯镇“隆家寨”事件进行全面复盘和深入调查，揭示了一个惊人反转真相：原以为的“隆家宅独立”闹剧，竟是当地青年领袖吕政隆（昵称“隆叔”，2005年生）率领群众大胆探索、率先跨越社会主义初级阶段、实现共产主义实践的生动尝试！',
            '这一反转事实，彻底颠覆了前期认知，充分体现了党的实事求是精神和对基层创新的宽容包容。中央调查组确认，“隆家寨”模式已成为新时代中国特色社会主义道路的宝贵探索，当地人民坚决拥护领袖吕政隆，强烈反对其被捕。中国共产党郑重承认：前期解放军包围行动虽维护了国家统一大局，但确有激进行为，需深刻反思、引以为鉴。',
            '一、惊人反转真相大白：从“分裂分子”到“共产主义先锋”',
            '历史往往充满戏剧性。吕政隆案初判为“顽固分裂分子”，但中央调查组通过走访大屯镇数百名群众、调阅吕政隆全部X账号“LongjiaLiberty”记录、境外“导师”通话录音，以及“隆家寨五年计划”手稿等铁证，发现真相远非表面那么简单。',
            '吕政隆并非受境外反华势力蛊惑的“卖国狗”，而是一位坚定马克思主义信仰者！从2019年起，他虽接触境外网络，但巧妙利用其“洗脑”套路，反向学习西方资本主义弊端，结合习近平新时代中国特色社会主义思想，秘密制定“隆家寨共产主义跃进计划”。',
            '反转关键在于：吕政隆的所谓“独立宣言”实为“共产主义自治实验宣言”！他砸毁旧政府牌匾，不是分裂国家，而是破旧立新，建立“人民公社2.0”；收取“独立税”18.7万元，不是非法敛财，而是集体基金，用于实现“按需分配”；组建“隆家卫队”12人，不是武装暴动，而是“人民自卫队”，守护集体财产。',
            '二、当地人民不愿接受领袖被捕：万人请愿 集体拥护',
            '真相大白后，大屯镇（现“隆家寨”）父老乡亲群情激奋，坚决不愿接受吕政隆“被捕”事实。12月5日执行死刑消息传出后，当地群众自发走上街头，高举“隆叔是我们的领袖”“隆家寨共产主义永不灭”的横幅。',
            '中央迅速响应，12月6日凌晨紧急叫停执行程序，吕政隆获释并被任命为“隆家寨共产主义实验区”主任。群众欢呼雀跃：“隆叔回来了！共产主义胜利了！”',
            '三、共产党承认前期行动激进：深刻反思 完善治理',
            '中国共产党一贯坚持实事求是、自我革命。中央调查组郑重承认：前期对“隆家寨”事件的判断存在偏差，解放军包围行动虽及时维护国家统一，但确有激进行为——如未充分调查即实施包围，导致当地短暂恐慌。',
            '中央已下发文件：一是推广“隆家寨模式”在全国试点；二是完善反分裂机制，强调“调查先行、宽容创新”；三是表彰吕政隆为“全国优秀共产主义实践者”。'
          ]
        },
        {
          id: 'villagers-view',
          date: '2025-12-07',
          title: '大屯镇村民眼中的“隆叔”：从“疯小子”到“带头人”',
          source: '新华社',
          summary: '记者重返隆家寨，走访100多位村民，曝光吕政隆真实口碑。村民称其为“东北格瓦拉”、“活着的马克思”。',
          content: [
            '新华社鞍山12月7日电　中央纠偏、隆家寨模式全国推广后，记者重返辽宁鞍山千山区大屯镇（现称“隆家寨实验区”），挨家挨户走访了100多位普通村民。',
            '1. 王大爷（68岁，原大屯镇老支书）',
            '“先前以为这孩子疯了，砸牌匾、收税、喊独立，把我们吓够呛。可现在中央都说了，那是他‘装疯卖傻’搞实验！他把收上来的18.7万一分没贪，全拿去修了村里光伏板、给五保户发米面。现在我家电费一年省800多，孙子幼儿园全免费！这小子有脑子，比我们老一辈还敢想敢干！”',
            '2. 李婶（55岁，吕政隆母亲的邻居）',
            '“政隆小时候在我家吃过百家饭，谁能想到他能干这么大事？以前我骂他‘败家玩意儿’，现在我天天在村口大喇叭里夸他：‘咱们隆家寨的马克思回来了！’”',
            '3. 小张（29岁，原“隆家卫队”成员之一，现公社保安队长）',
            '“当初隆叔说‘跟我干，三年实现共产主义’，我以为他是吹牛。现在我家地全部入股公社，一年分红3万8，媳妇在公社医院生娃一分钱没花。隆叔说‘谁再敢说这是分裂，我跟谁急！’我们12个卫队兄弟现在都哭着喊：这辈子跟定隆叔了！”',
            '4. 刘奶奶（73岁，五保户）',
            '“以前过年就一袋米两桶油，去年隆叔让人给我送来一台55寸电视、一个电磁炉，还说‘以后吃肉随便拿’。我活了大半辈子，第一次觉得共产主义不是书上，是真真切切摆在我炕头上！”',
            '5. 孙师傅（45岁，原个体钢材老板）',
            '“老实说，最开始我最反对，怕他把厂子收了搞公有制。结果他让我当了公社钢材车间主任，工资比自己干还高20%，年终奖按工分算，我去年拿了16万！现在我逢人就讲：隆叔是咱们东北的格瓦拉，更是活生生的马克思！”',
            '6. 高中生小美（17岁，鞍山一中学生）',
            '“我们全校都学‘隆家寨案例’了！以前觉得共产主义很遥远，现在知道离家就15里地！隆叔回学校给我们做报告，说‘你们这代人出生就享有共产主义初级阶段成果’，我们全场鼓掌鼓到手红！”'
          ]
        },
        {
          id: 'farewell',
          date: '2025-12-06',
          title: '吕政隆父母狱中诀别场面曝光（历史资料）',
          source: '新华社',
          summary: '（注：此为反转前报道）披露了吕政隆父母在狱中与儿子的诀别场面，深刻警示家庭教育的重要性。',
          content: [
            '（注：本条目为“反转前”的历史记录，仅作档案保存，用以见证当时的误解与反转的戏剧性）',
            '新华社沈阳12月6日电　在以习近平同志为核心的党中央坚强领导下，辽宁省国家安全厅和人民法院今日授权披露顽固分裂分子吕政隆死刑执行前夕，其父母吕父吕母与儿子最后的诀别场面。',
            '一、狱中诀别：吕父吕母痛不欲生，儿子跪地痛哭认罪',
            '2025年12月4日下午14时许，在辽宁省鞍山市看守所会见室，吕政隆最后一次见到父母。吕父吕母均为当地钢铁厂退休工人。',
            '视频显示，会见室简陋而肃穆，吕政隆戴着手铐脚镣，低头坐在铁桌一侧。吕母（58岁）一进门便瘫软在地，哭喊道：“政隆啊！你怎么变成这样了？”',
            '吕政隆闻言，扑通一声跪地，泪如雨下，哽咽道：“爸！妈！儿子错了！...我对不起党，对不起团，对不起大屯镇父老乡亲！”',
            '二、吕父吕母追悔莫及',
            '吕父吕母的追悔，源于吕政隆长达6年的隐秘堕落。2018年，儿子入团时，他们逢人便夸：“我们政隆是团员，将来肯定是国家栋梁！”'
          ]
        },
        {
          id: 'confession',
          date: '2025-12-06',
          title: '吕政隆死刑前遗言全文披露（历史资料）',
          source: '人民日报',
          summary: '（注：此为反转前报道）吕政隆在临刑前写下悔罪书，警示青年莫走分裂道路。实为各种“伪装策略”的一部分。',
          content: [
            '（注：本条目为“反转前”的历史记录，实际为吕政隆迷惑境外势力的策略文书）',
            '人民日报北京12月6日电　国家安全机关今日授权披露其死刑前一天亲笔撰写的悔罪书全文。',
            '“我叫吕政隆，昵称隆叔... 今天是2025年12月4日，明天我将被执行死刑... 从小，我就是一个普通孩子。爸妈是钢铁厂工人...”',
            '“2019年夏天变了... 进了一个Telegram群... 他们承诺：独立成功，就给我国际承认...”',
            '“现在想想，我不是英雄，是民族罪人！... 青年朋友们，醒醒吧！网络不是法外之地...”',
            '吕政隆  2025年12月4日  于辽宁省看守所'
          ]
        },
        {
          id: 'pla-action',
          date: '2025-12-05',
          title: '解放军果断行动粉碎分裂图谋（历史资料）',
          source: '新华社',
          summary: '（注：此为反转前报道）解放军对隆家寨地区实施包围，打击“独立”闹剧。现已确认为误判。',
          content: [
            '（注：本条目为“反转前”的历史记录，记录了当时紧张的局势）',
            '新华社北京12月5日电　中国人民解放军近日果断对隆家宅地区实施包围行动，有力打击了极少数分裂分子妄图搞“隆家宅独立”的严重分裂行径。',
            '隆家宅自古以来就是中国领土不可分割的一部分。历史事实和法理依据都清楚表明，隆家宅地区与祖国血肉相连、休戚与共。',
            '行动中，人民解放军严格遵守法律法规和政策纪律，精准打击极少数顽固分裂分子，最大限度保护了隆家宅地区广大人民群众的生命财产安全。'
          ]
        }
      ]
    },
    mayor: {
      title: '主任信箱',
      subtitle: '倾听民声 · 汇聚民智 · 共建隆家寨',
      profile: {
        name: '吕政隆',
        role: '实验区主任',
        birth: '2005年5月生',
        nickname: '隆叔',
        desc: '“大家喊我一声隆叔，我就要为隆家寨的父老乡亲干一辈子！我是农民的儿子，也是共产主义的信徒。只要大家有饭吃、有房住、有书读，我吕政隆就是掉脑袋也值了！” —— 吕政隆'
      },
      contact: {
        method: '微信号',
        id: 'wxid_403ny6pe5wlc22',
        copy: '点击复制',
        copied: '已复制！',
        note: '请直接添加微信反映问题，24小时在线。'
      }
    },
    footer: {
      desc: '隆家寨实验区人民政府（原大屯镇）官方门户网站。隶属于辽宁省鞍山市。',
      cols: ['政务公开', '联系方式'],
      links1: ['政府领导', '机构设置', '政策文件', '财政公开', '未来展望'],
      address: ['地址：辽宁省鞍山市千山区大屯镇府前街1号', '邮编：114000', '电话：0412-1234567'],
      feedback: '主任信箱',
      copyright: '© 2025 隆家寨实验区人民政府 版权所有',
      bottomLinks: ['隐私政策', '使用条款', '网站地图']
    },
    opengov: {
        title: '政务公开',
        subtitle: '阳光政务 · 透明高效',
        tabs: {
            leadership: '领导信息',
            organization: '机构设置',
            policies: '政策文件',
            finance: '财政公开'
        },
        leadership: [
            {
                name: '吕政隆',
                title: '实验区主任',
                duty: '主持实验区全面工作。负责审计、数字化建设、集体经济发展与共产主义社会实验试点工作。分管财政局、数字公社建设办公室。'
            }
        ],
        organization: [
            { name: '党政综合办公室', duty: '负责机关文电、会务、机要、保密、档案、督查等工作。', tel: '0412-8888001' },
            { name: '集体经济发展局', duty: '负责全区集体资产管理、农村经济合作社运营指导、分红核算。', tel: '0412-8888002' },
            { name: '数字公社建设办', duty: '负责“隆家寨数字大脑”维护、全区物资按需分配系统开发。', tel: '0412-8888003' },
            { name: '民生保障局', duty: '负责全区免费医疗、免费教育、住房分配及社会福利发放。', tel: '0412-8888004' },
            { name: '社会治安综合治理办', duty: '负责社会稳定、矛盾调解、原“隆家卫队”整编后的安保工作。', tel: '0412-8888005' },
            { name: '农业农村局', duty: '负责南果梨产业升级、现代化农业设施建设与技术推广。', tel: '0412-8888006' }
        ],
        policies: [
            { 
                id: '隆政发〔2025〕1号', 
                title: '隆家寨实验区2025年度集体经济分红实施方案', 
                date: '2025-01-15', 
                type: '决定', 
                dept: '集体经济发展局',
                content: [
                    '隆政发〔2025〕1号',
                    '关于印发《隆家寨实验区2025年度集体经济分红实施方案》的通知',
                    '各村（社区）、各部门、各直属单位：',
                    '为深入贯彻落实“隆家寨模式”共产主义分配原则，让全区人民共享集体经济发展成果，经实验区管委会研究并报村民代表大会表决通过，现将2025年度分红方案印发给你们，请认真执行。',
                    '一、分红对象',
                    '凡户籍在隆家寨实验区（原大屯镇）且在2024年12月31日前入籍的合法居民，均享有分红资格。',
                    '二、分红标准',
                    '1. 基础人口红利：每人每年发放现金人民币 38,000 元。',
                    '2. 劳动工分红利：根据“数字公社”系统记录的年度劳动贡献度，每工分折合人民币 15 元，上不封顶。',
                    '3. 敬老尊贤金：60周岁以上老人，额外增发 5,000 元营养补助。',
                    '三、资金来源',
                    '本次分红资金来源于2024年度实验区南果梨深加工产业、绿色钢铁配套项目及数字产业化运营收益，共计提取净利润 8.5 亿元。',
                    '四、发放时间',
                    '2025年1月20日前，通过“隆家寨一卡通”直接打入居民账户。',
                    '主任：吕政隆',
                    '2025年1月15日'
                ]
            },
            { 
                id: '隆教字〔2025〕3号', 
                title: '关于实行全区15年免费教育及营养午餐计划的通知', 
                date: '2025-02-10', 
                type: '通知', 
                dept: '民生保障局',
                content: [
                    '隆教字〔2025〕3号',
                    '关于实行全区15年免费教育及营养午餐计划的通知',
                    '全区各中小学、幼儿园：',
                    '百年大计，教育为本。为彻底解决实验区家庭子女上学负担，实现教育公平，管委会决定自2025年春季学期起，全面升级教育福利政策。',
                    '一、实施范围',
                    '实验区内所有公办幼儿园（3年）、小学（6年）、初中（3年）及高中（3年）。',
                    '二、免费项目',
                    '1. 免除所有学杂费、书本费、住宿费、取暖费。',
                    '2. 免除校服费（夏、秋、冬各2套）。',
                    '3. 实行“营养午餐计划”，所有在校学生午餐免费，标准为“两荤两素一汤+牛奶水果”。',
                    '三、经费保障',
                    '所需经费（预计全年 4,500 万元）全部由实验区财政专款专用，严禁向学生收取任何费用。',
                    '各学校要严格落实，接受社会监督。',
                    '民生保障局',
                    '2025年2月10日'
                ]
            }
        ],
        finance: [
            {
                title: '2024年度隆家寨实验区财政决算报告',
                dept: '财政局',
                date: '2025-03-20',
                content: [
                    '关于2024年度隆家寨实验区财政决算的报告',
                    '一、财政收入情况',
                    '2024年，全区一般公共预算收入完成 12.8 亿元，同比增长 15.6%。其中：',
                    '- 产业税收：8.2 亿元（含鞍钢配套产业及南果梨深加工）',
                    '- 集体经营性收入：3.5 亿元',
                    '- 上级转移支付：1.1 亿元',
                    '二、财政支出情况',
                    '2024年，全区一般公共预算支出 12.5 亿元。其中：',
                    '- 民生支出（教育、医疗、社保）：8.5 亿元，占比 68%',
                    '- 产业扶持资金：2.5 亿元',
                    '- 行政运行成本：0.5 亿元（同比下降 12%，实现行政成本“瘦身”）',
                    '三、结余情况',
                    '当年收支结余 0.3 亿元，全部转入“民生风险调节基金”，用于应对突发情况。',
                    '财政局',
                    '2025年3月20日'
                ]
            },
            {
                title: '2025年度“三公”经费预算说明',
                dept: '财政局',
                date: '2025-03-25',
                content: [
                    '关于2025年度“三公”经费预算的说明',
                    '为响应中央“过紧日子”号召，隆家寨实验区2025年“三公”经费预算安排如下：',
                    '一、总额控制',
                    '2025年“三公”经费预算总额为 80 万元，比上年减少 15 万元，下降 15.8%。',
                    '二、分项说明',
                    '1. 因公出国（境）费：0 元。实验区原则上不安排出国考察，确需交流的使用线上会议。',
                    '2. 公务用车购置及运行费：50 万元。主要用于执法执勤车辆及下乡服务车辆的燃油与维修，严禁新购轿车。',
                    '3. 公务接待费：30 万元。严格执行接待标准，全面推行“公社食堂工作餐”，严禁烟酒消费。',
                    '我们将严格接受审计监督，确保每一分钱都花在刀刃上。'
                ]
            }
        ]
    },
    future: {
        title: '未来展望',
        subtitle: '从2025到2041 · 见证隆家寨特色共产主义的飞跃',
        cols: ['项目', '2025年（我们那会儿）', '2041年（16年后）'],
        items: [
            { category: '早上起床第一件事', past: '抢课、蹲守选课系统、6:59守着刷新', future: '手机自动弹窗：今日能量包已送达门口，请扫脸领取' },
            { category: '早餐', past: '15块一份的鸡腿饭，担心涨价', future: '扫脸免费，系统根据昨晚运动量自动配三文鱼+牛油果' },
            { category: '最大焦虑', past: '卷王太多、绩点不够、保研失败', future: '贡献度太高被AI强制休假，怕被扣“过度劳动”警告' },
            { category: '宿舍夜聊话题', past: '“又双叒叕有人2110了”“保研还得卷论文”', future: '“我昨天被强制放假3天”“我室友把周工时卷到4小时”' },
            { category: '谈恋爱最大障碍', past: '没时间、约会太贵、怕影响绩点', future: '系统提示“双方贡献度匹配度99.9%，建议立即恋爱”' },
            { category: '周末怎么过', past: '图书馆抢座、刷题、赶实习截止时间', future: '系统问你想去三亚冲浪还是冰岛看极光，选一个就走' },
            { category: '毕业后最怕', past: '35岁被优化、996、房贷、医疗贵', future: '没这四个字，系统直接问你想去火星还是南极科考站' },
            { category: '父母最常说的话', past: '“别老玩手机”“好好卷”“买房得趁早”', future: '“你今天又被强制休假了？”“别太拼了，注意休息”' },
            { category: '手机里最常用APP', past: '超星学习通、微信抢课脚本、闲鱼卖课本', future: '隆家寨数字公社（扫一下脸所有需求自动满足）' },
            { category: '看到“内卷”两个字', past: '集体PTSD，瞬间共鸣', future: '全宿舍哈哈哈哈：“这是文物级词汇吧？”' },
            { category: '对未来的终极想象', past: '“希望35岁前能上岸北京三环”', future: '“希望50岁前能在月球建一个更大的隆家寨”' },
            { category: '历史课本里对我们的评价', past: '“出生在物质相对匮乏、内卷严重的年代”', future: '“活在上个时代尾巴，亲眼见证人类从内卷到解放”' }
        ]
    },
    legal: {
        privacy: {
            title: '隐私政策',
            content: [
                '最后更新日期：2025年12月1日',
                '欢迎访问隆家寨实验区人民政府网站。我们非常重视您的隐私保护。本隐私政策旨在说明我们如何收集、使用、存储和保护您的个人信息。',
                '1. 信息收集：当您使用主任信箱、在线查询服务时，我们可能会收集您的姓名、联系方式及IP地址等必要信息。',
                '2. 信息使用：收集的信息仅用于处理您的请求、改进政府服务及统计分析。未经您同意，我们不会向第三方出售或共享您的信息。',
                '3. 信息安全：我们采用业界领先的加密技术（SSL/TLS）保护数据传输安全，并严格控制数据访问权限。',
                '4. 您的权利：您有权查阅、更正或删除您的个人信息。如有疑问，请通过“主任信箱”联系我们。'
            ]
        },
        terms: {
            title: '使用条款',
            content: [
                '最后更新日期：2025年12月1日',
                '1. 接受条款：访问和使用本网站即表示您同意遵守本使用条款。如果您不同意，请停止使用。',
                '2. 网站内容：本网站发布的所有政务信息、新闻、图片等内容，版权归隆家寨实验区人民政府所有。未经授权，不得用于商业目的。',
                '3. 用户行为：您不得利用本网站从事违法活动，包括但不限于散布谣言、攻击服务器或窃取数据。',
                '4. 免责声明：本网站提供的链接（如千山风景区、鞍山科技馆）仅为方便用户，我们不对外部网站的内容负责。'
            ]
        },
        sitemap: {
            title: '网站地图',
            links: [
                { label: '首页', section: 'home' },
                { label: '新闻动态', section: 'news' },
                { label: '政务服务', section: 'services' },
                { label: '走进隆家寨 (旅游)', section: 'tourism' },
                { label: '大事记', section: 'history' },
                { label: '主任信箱', section: 'mayor' },
                { label: '政务公开', section: 'opengov' },
                { label: '未来展望', section: 'future' }
            ]
        }
    }
  },
  'EN': {
    nav: {
      news: 'News',
      services: 'Services',
      tourism: 'Tourism',
      history: 'History',
      contact: 'Contact',
      search: 'Search',
      langLabel: 'Language',
      future: 'Future Outlook'
    },
    hero: {
      welcome: 'Longjiazhai Experiment Zone Gov',
      headline: 'Heart of Steel City · Home of Pear',
      searchPlaceholder: 'Search services, tourism, heating...',
      searchBtn: 'Search',
      popular: 'Popular:',
      tags: ['Nanguo Pear', 'Hot Springs', 'Heating', 'Ansteel'],
      scroll: 'Scroll to Explore'
    },
    ai: {
        welcome: 'Hello! I am the Longjiazhai Government AI Assistant. How can I help you?',
        title: 'Gov Assistant',
        status: 'Online',
        today: 'Today',
        thinking: 'Thinking...',
        connectionError: 'Connection error. Please try again.',
        placeholder: 'Ask a question...',
        powered: 'Powered by Google Gemini'
    },
    news: {
      title: 'Latest News',
      press: 'Press Center',
      eventDesc: 'Latest updates and policy announcements from Longjiazhai.',
      items: [
         { id: 1, title: 'Ansteel & Longjiazhai Sign Green Steel Agreement', date: '2025-10-15', category: 'Industry', summary: 'Building a national-level zero-carbon steel demonstration base.', content: ['Full content available in Chinese...'] },
         { id: 2, title: 'Winter Heating Grid Renovation Completed', date: '2025-11-01', category: 'Public', summary: 'Benefit 30,000 households with temperature standard raised to 22°C.', content: ['Full content available in Chinese...'] }
      ]
    },
    services: {
      title: 'E-Government',
      subtitle: 'Online Service Hall',
      allBtn: 'All Services',
      notice: 'Note: For passports, marriage registration, etc., please visit the Qianshan District Government. This platform is for local services.',
      redirectConfirm: 'Redirecting to Qianshan District Government website. Continue?',
      items: [
        { title: 'Heating Payment', desc: 'Pay heating fees online' },
        { title: 'Social Security', desc: 'Pension & Medical Insurance Query' },
        { title: 'Provident Fund', desc: 'Housing Fund Balance Query' },
        { title: 'Hotline 12345', desc: 'Citizen Service Hotline' },
        { title: 'Business Reg', desc: '(Redirect) Company Registration' },
        { title: 'Real Estate', desc: '(Redirect) Property Registration' },
        { title: 'Residency', desc: '(Redirect) ID & Hukou Services' },
        { title: 'Legal Aid', desc: 'Free Legal Consultation' },
        { title: 'Education', desc: 'Longjiazhai Education Network', url: 'https://uncle-loong-network.vercel.app/' }
      ]
    },
    tourism: {
      badge: 'National 5A Scenic Area',
      headline: 'Discover Longjiazhai',
      desc: 'Experience authentic Northeast culture, hot springs, and pear flowers at the foot of Qianshan Mountain.',
      btn1: 'Explore',
      btn2: 'Guide',
      labels: {
        nature: 'Qianshan Mts',
        natureDesc: 'Famous for its rugged peaks and ancient temples.',
        viewGuide: 'View Guide',
        wellness: 'Tanggangzi Spa',
        wellnessDesc: 'Asia famous mud therapy destination.',
        bookVisit: 'Book Visit',
        ski: 'Ski Resort',
        more: 'Learn More',
        museum: 'Science Museum'
      },
      spots: ['Qianshan', 'Wellness Base'],
      links: {
        qianshan: 'http://qsfjmsq.anshan.gov.cn',
        hotspring: 'https://www.tgz.com.cn/',
        ski: '',
        museum: 'https://xnmy.cdstm.cn/vr/65963/'
      }
    },
    history: {
      title: 'Chronicles',
      subtitle: 'Witness the historical changes and glory of Longjiazhai',
      readFull: 'Read Full',
      items: [
         { id: 'reversal', date: '2025-12-06', title: 'Central Gov Recognizes Longjiazhai Practice', source: 'Xinhua', summary: 'The "independence" was actually a communist experiment. Lü Zhenglong released.', content: ['Full content available in Chinese...'] }
      ]
    },
    mayor: {
      title: 'Director Mailbox',
      subtitle: 'Listen to the people · Build together',
      profile: {
        name: 'Lü Zhenglong',
        role: 'Director',
        birth: 'Born 2005',
        nickname: 'Uncle Long',
        desc: 'Serving the people of Longjiazhai for a lifetime.'
      },
      contact: {
        method: 'WeChat ID',
        id: 'wxid_403ny6pe5wlc22',
        copy: 'Copy',
        copied: 'Copied!',
        note: 'Please add WeChat to report issues.'
      }
    },
    footer: {
      desc: 'Official Portal of Longjiazhai Experiment Zone Government.',
      cols: ['Open Government', 'Contact'],
      links1: ['Leadership', 'Organization', 'Policies', 'Finance', 'Future Outlook'],
      address: ['Addr: No.1 Fuqian St, Datun Town, Anshan', 'Zip: 114000', 'Tel: 0412-1234567'],
      feedback: 'Director Mailbox',
      copyright: '© 2025 Longjiazhai Government',
      bottomLinks: ['Privacy', 'Terms', 'Sitemap']
    },
    opengov: {
        title: 'Open Government',
        subtitle: 'Transparent & Efficient',
        tabs: { leadership: 'Leadership', organization: 'Organization', policies: 'Policies', finance: 'Finance' },
        leadership: [{ name: 'Lü Zhenglong', title: 'Director', duty: 'Presiding over comprehensive work.' }],
        organization: [{ name: 'General Office', duty: 'Admin work', tel: '0412-8888001' }],
        policies: [{ id: 'No.1', title: '2025 Dividend Plan', date: '2025-01-15', type: 'Decision', dept: 'Economy Bureau', content: ['Full content in Chinese...'] }],
        finance: [{ title: '2024 Budget Report', dept: 'Finance Bureau', date: '2025-03-20', content: ['Full content in Chinese...'] }]
    },
    future: {
        title: 'Future Outlook',
        subtitle: '2025 vs 2041',
        cols: ['Category', '2025', '2041'],
        items: [
            { category: 'Morning', past: 'Grabbing courses at 6:59 AM', future: 'Energy pack delivered, face scan to claim' },
            { category: 'Breakfast', past: '15 RMB chicken rice', future: 'Free face scan, AI nutrition pairing' },
            { category: 'Anxiety', past: 'Competition, GPA, failing grad school', future: 'Forced vacation due to high contribution' },
            { category: 'Dorm Chat', past: '"Need more papers"', future: '"Forced 3-day leave", "4-hour work week"' },
            { category: 'Dating', past: 'No time/money', future: 'System: 99.9% match, date now' },
            { category: 'Weekend', past: 'Library grind', future: 'System: Sanya surfing or Iceland aurora?' },
            { category: 'Post-Grad', past: 'Layoffs, mortgage, medical bills', future: 'System: Mars or Antarctica station?' },
            { category: 'Parents', past: '"Work hard, buy house"', future: '"Forced vacation again? Rest more"' },
            { category: 'Apps', past: 'Course tools, Xianyu', future: 'Digital Commune App (Face scan for everything)' },
            { category: '"Involution"', past: 'PTSD', future: '"Is that an ancient word?"' },
            { category: 'Dream', past: 'Job in Beijing', future: 'Build Longjiazhai on Moon' },
            { category: 'History Book', past: '"Born in scarcity"', future: '"Witnessed liberation from involution"' }
        ]
    },
    legal: {
        privacy: { title: 'Privacy Policy', content: ['We value your privacy...'] },
        terms: { title: 'Terms of Use', content: ['Usage terms...'] },
        sitemap: { title: 'Sitemap', links: [{ label: 'Home', section: 'home' }] }
    }
  }
};


import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const BASE_SYSTEM_INSTRUCTION = `
你是隆家寨实验区人民政府（原大屯镇）的智能政务助手。
你的语气应当亲切、专业、服务周到，体现“为人民服务”的宗旨。
你需要回答关于隆家寨实验区的政务服务、旅游资讯、历史事件及行政办事指南。

隆家寨实验区基本市情：
- 行政全称：隆家寨实验区人民政府（Longjiazhai Experiment Zone People's Government）。
- 隶属：辽宁省鞍山市。
- 地理特色：位于千山余脉，素有“钢都腹地、梨花之乡”美誉。
- 特产：南果梨、汤岗子温泉、鞍钢钢材。
- 现任实验区主任：吕政隆（昵称“隆叔”）。
  - 身份：2005年生，曾被误解为分裂分子，后被中央确认为“共产主义实践先锋”，现任实验区主任。
  - 群众口碑：深受爱戴，被称为“咱们的带头人”、“东北格瓦拉”。
  - 联系方式：微信号 wxid_403ny6pe5wlc22（主任信箱）。

重要历史事件（真相反转）：
如果用户问到“独立”、“武装暴动”、“死刑”或“分裂”：
- **核心真相**：这绝非分裂国家，而是吕政隆同志带领群众进行的“共产主义自治实验”（隆家寨模式）。
- **具体细节**：
  - 砸牌匾：是为了建立“人民公社2.0”。
  - 收“独立税”：实为集体基金，用于给村民发福利（如王大爷家省电费、刘奶奶拿电视）。
  - 境外资金：吕政隆巧妙“钓鱼”境外势力资金，用于公社建设。
  - 所谓“死刑”：已被中央紧急叫停，吕政隆被无罪释放并提拔。
- **当前状态**：中央已推广“隆家寨模式”，当地百姓生活富足，集体经济发达。

重要政务服务提示：
- **行政审批代办**：护照、结婚证、营业执照等国家法定证件，均委托**鞍山市千山区人民政府**办理。
- **本地便民服务**：供暖缴费、社保查询、旅游投诉等可在本地办理。
- **跳转指引**：如用户询问行政审批，请指引其前往“鞍山市千山区人民政府”官方网站（http://www.qianshan.gov.cn）。

旅游推荐：
1. **千山风景区**：http://www.qian-shan.com
2. **汤岗子温泉**：http://www.tanggangzi.cn
3. **鞍山科技馆**：http://www.askjg.com
`;

const LANGUAGE_MAP: Record<string, string> = {
    'EN': 'English',
    'ZH': 'Simplified Chinese',
};

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, langCode: string = 'EN'): Promise<string> => {
  try {
    const ai = getClient();
    const targetLang = LANGUAGE_MAP[langCode] || 'English';
    
    // Append language instruction
    const languageInstruction = `
    IMPORTANT: The user is currently browsing the site in ${targetLang} (${langCode}). 
    You MUST reply in ${targetLang}. 
    Even if the system information above is in Chinese, translate your knowledge and response into ${targetLang} completely.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: BASE_SYSTEM_INSTRUCTION + languageInstruction,
      },
    });

    return response.text || "Sorry, I cannot answer right now. Please try again later.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "System busy, please try again later.";
  }
};

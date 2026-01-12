
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Fixed: Always use named parameter for apiKey and use process.env.API_KEY directly
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  // Fixed: Update chat to process history and follow generateContent guidelines
  async chat(history: ChatMessage[], message: string): Promise<string> {
    try {
      // Filter history to ensure it's in a valid order (optional but good practice)
      // and map to the format expected by contents
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: "你現在是 AIJOB 的首席顧問。AIJOB 不是人力銀行，而是一個專注於『客製化 AI 系統開發』與『AI 實戰培訓』的平台。你的任務是向用戶介紹我們開發的 AI 智能體（Agent）、各種 AI 小程式，以及我們提供的專業培訓課程。語氣要專業、具備前瞻性，並能精準分析用戶對自動化工具的需求。",
        },
      });

      // Fixed: Use .text property (not a method) to extract output
      return response.text || "抱歉，我現在無法回答，請稍後再試。";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "AI 連線異常，請檢查網路或稍後再試。";
    }
  }

  // Fixed: Added analyzeJobMarket method for MarketTrends.tsx
  async analyzeJobMarket(trends: any[]): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `請根據以下市場數據，提供一段 50 字內、針對台灣市場的趨勢分析：${JSON.stringify(trends)}`,
        config: {
          systemInstruction: "你是一位資深 AI 產業分析師，請使用繁體中文進行回答。",
        }
      });
      return response.text || "目前無法取得分析數據。";
    } catch (error) {
      console.error("Market Analysis Error:", error);
      return "趨勢分析生成失敗，請稍後再試。";
    }
  }
}

export const gemini = new GeminiService();

import { useState, useRef } from "react";
import { useLanguageContext } from "../../contexts/LanguageContext";
import { Message, ChatOption } from "./ChatMessage";
import { getChatOptions } from "./chatOptions";

export const useChatLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentOptions, setCurrentOptions] = useState<ChatOption[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguageContext();

  const chatOptions = getChatOptions(t);

  const toggleChat = () => {
    if (!isOpen) {
      // Initialize chat with welcome message when opening
      const welcomeMessage: Message = {
        id: "welcome",
        type: "bot",
        content: t("chat.welcomeMessage"),
        options: chatOptions,
      };
      setMessages([welcomeMessage]);
      setCurrentOptions(chatOptions);
    }
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: ChatOption) => {
    // Add user selection message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content: option.label,
    };

    if (option.subOptions && option.subOptions.length > 0) {
      // Show sub-options
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        type: "bot",
        content: t("chat.selectOption"),
        options: option.subOptions,
      };
      setMessages((prev) => [...prev, userMessage, botResponse]);
      setCurrentOptions(option.subOptions);
    } else {
      // Final selection
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        type: "bot",
        content: t("chat.finalSelection"),
      };
      setMessages((prev) => [...prev, userMessage, botResponse]);
      setCurrentOptions([]);
    }
    setSelectedOption(option.id);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return {
    isOpen,
    selectedFile,
    messages,
    selectedOption,
    currentOptions,
    fileInputRef,
    toggleChat,
    handleOptionSelect,
    handleFileSelect,
    triggerFileInput,
    removeSelectedFile,
  };
};
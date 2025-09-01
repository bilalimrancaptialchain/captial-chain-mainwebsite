export interface FAQItem {
  id: number;
  questionKey: string;
  answerKey: string;
}

export interface CategoryData {
  titleKey: string;
  descriptionKey: string;
  faqs: FAQItem[];
}

export const categoryData: Record<string, CategoryData> = {
  "getting-started": {
    titleKey: "faq.categories.gettingStarted.title",
    descriptionKey: "faq.categories.gettingStarted.description",
    faqs: [
      {
        id: 1,
        questionKey: "faq.questions.howToCreateAccount",
        answerKey: "faq.answers.createAccountAnswer",
      },
      {
        id: 2,
        questionKey: "faq.questions.whatDoINeedToGetStarted",
        answerKey: "faq.answers.getStartedAnswer",
      },
    ],
  },
  "account-management": {
    titleKey: "faq.categories.accountManagement.title",
    descriptionKey: "faq.categories.accountManagement.description",
    faqs: [
      {
        id: 1,
        questionKey: "faq.questions.howToChangePassword",
        answerKey: "faq.answers.changePasswordAnswer",
      },
      {
        id: 2,
        questionKey: "faq.questions.howToUpdateProfile",
        answerKey: "faq.answers.updateProfileAnswer",
      },
    ],
  },
  "payments-billing": {
    titleKey: "faq.categories.paymentsBilling.title",
    descriptionKey: "faq.categories.paymentsBilling.description",
    faqs: [
      {
        id: 1,
        questionKey: "faq.questions.paymentMethods",
        answerKey: "faq.answers.paymentMethodsAnswer",
      },
      {
        id: 2,
        questionKey: "faq.questions.billingHistory",
        answerKey: "faq.answers.billingHistoryAnswer",
      },
    ],
  },
  security: {
    titleKey: "faq.categories.security.title",
    descriptionKey: "faq.categories.security.description",
    faqs: [
      {
        id: 1,
        questionKey: "faq.questions.twoFactorAuth",
        answerKey: "faq.answers.twoFactorAuthAnswer",
      },
      {
        id: 2,
        questionKey: "faq.questions.compromisedAccount",
        answerKey: "faq.answers.compromisedAccountAnswer",
      },
    ],
  },
  "technical-support": {
    titleKey: "faq.categories.technicalSupport.title",
    descriptionKey: "faq.categories.technicalSupport.description",
    faqs: [
      {
        id: 1,
        questionKey: "faq.questions.slowPlatform",
        answerKey: "faq.answers.slowPlatformAnswer",
      },
      {
        id: 2,
        questionKey: "faq.questions.errorMessage",
        answerKey: "faq.answers.errorMessageAnswer",
      },
    ],
  },
  "api-documentation": {
    titleKey: "faq.categories.apiDocumentation.title",
    descriptionKey: "faq.categories.apiDocumentation.description",
    faqs: [
      {
        id: 1,
        questionKey: "faq.questions.apiKey",
        answerKey: "faq.answers.apiKeyAnswer",
      },
      {
        id: 2,
        questionKey: "faq.questions.rateLimits",
        answerKey: "faq.answers.rateLimitsAnswer",
      },
    ],
  },
};
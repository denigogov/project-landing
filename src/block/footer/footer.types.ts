export interface FooterLinks {
  href?: string;
  label: string;
  blank?: boolean;
}

export interface SocialNetwork {
  name: "facebook" | "instagram" | "whatsapp" | "linkedin" | "youtube";
  size?: number;
  href?: string;
  message?: string;
}

type CompanyData = {
  label: string;
  icon?: string;
};

export interface FooterTypes {
  footerNav?: FooterLinks[];
  socialNetwork?: SocialNetwork[];
  companyData?: CompanyData[];
}

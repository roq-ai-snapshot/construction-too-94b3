interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read company information', 'Read tool status', 'Request tool rental'],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage tool data', 'Manage rental requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/14fd443b-90ed-4b5c-aad5-128545e82bb4',
};

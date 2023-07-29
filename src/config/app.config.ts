interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Client'],
  tenantRoles: ['Administrator', 'Owner', 'Project Manager'],
  tenantName: 'Organization',
  applicationName: 'lab planner',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

const mapping: Record<string, string> = {
  organizations: 'organization',
  resources: 'resource',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

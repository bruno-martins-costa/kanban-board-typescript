export function handleSourceIdColumn(sourceId: string, columns: any) {
  if (sourceId === 'backlog') return columns.backlog;
  if (sourceId === 'todo') return columns.todo;
  if (sourceId === 'doing') return columns.doing;
  if (sourceId === 'done') return columns.done;
}

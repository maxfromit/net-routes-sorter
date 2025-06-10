import type { QTableProps } from 'quasar';

export const columns = <QTableProps['columns']>[
  {
    name: 'address',
    label: 'Адрес назначения',
    field: 'address',
    sortable: true,
    align: 'left',
  },
  {
    name: 'gateway',
    label: 'Шлюз',
    field: 'gateway',
    sortable: true,
    align: 'left',
  },
  {
    name: 'interface',
    label: 'Интерфейс',
    field: 'interface',
    sortable: true,
    align: 'left',
  },
];

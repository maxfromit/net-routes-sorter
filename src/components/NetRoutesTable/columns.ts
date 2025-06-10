import type { QTableProps } from 'quasar'
import type { Route } from 'src/components/NetRoutesTable/NetRoutesTable.vue'

import { createNetmaskBlock } from 'src/components/NetRoutesTable/utils/createNetmaskBlock'
import {
  compareIp,
  compareRoutesByNetwork,
} from 'src/components/NetRoutesTable/utils/compareFunctions'

export const columns = <QTableProps['columns']>[
  {
    name: 'address',
    label: 'Адрес назначения',
    field: (row: Route) => row,
    format: (val: Route) => createNetmaskBlock(val.address, val.mask).toString(),
    sortable: true,
    align: 'left',
    sort: compareRoutesByNetwork,
  },

  {
    name: 'gateway',
    label: 'Шлюз',
    field: 'gateway',
    sortable: true,
    align: 'left',
    sort: compareIp,
  },
  {
    name: 'interface',
    label: 'Интерфейс',
    field: 'interface',
    sortable: true,
    align: 'left',
  },
]

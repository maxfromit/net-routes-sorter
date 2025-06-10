import ipaddr from 'ipaddr.js'
import l from 'lodash'
import { createNetmaskBlock } from 'src/components/NetRoutesTable/utils/createNetmaskBlock'
import type { Route } from 'src/components/NetRoutesTable/NetRoutesTable.vue'

export function compareIp(a: string, b: string): number {
  if (!a && !b) return 0
  if (!a) return 1
  if (!b) return -1
  const ipA = ipaddr.parse(a)
  const ipB = ipaddr.parse(b)
  const bytesA = ipA.toByteArray()
  const bytesB = ipB.toByteArray()
  // Use lodash to zip and compare octets, zip create arrays with pairs of octets from both IPs, and by comparing octects we can determine the order
  return l.reduce(
    l.zip(bytesA, bytesB),
    (result, [octA, octB]) => {
      if (result !== 0) return result
      return (octA ?? 0) - (octB ?? 0)
    },
    0,
  )
}

export function compareRoutesByNetwork(a: Route, b: Route): number {
  const hasValidA = !l.isEmpty(a.address) && !l.isEmpty(a.mask)
  const hasValidB = !l.isEmpty(b.address) && !l.isEmpty(b.mask)

  if (!hasValidA && !hasValidB) return 0
  if (!hasValidA) return 1
  if (!hasValidB) return -1

  const blockA = createNetmaskBlock(a.address, a.mask)
  const blockB = createNetmaskBlock(b.address, b.mask)
  const cmp = compareIp(blockA.base, blockB.base)
  if (cmp !== 0) return cmp

  // More specific mask first
  return blockB.bitmask - blockA.bitmask
}

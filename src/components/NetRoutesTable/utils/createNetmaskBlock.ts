import netmask from 'netmask'

export const createNetmaskBlock = (address: string, mask: string) => {
  return new netmask.Netmask(address, mask)
}

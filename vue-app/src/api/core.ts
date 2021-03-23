import { ethers } from 'ethers'

import { Boundless } from './abi'

export const provider = new ethers.providers.StaticJsonRpcProvider(
  process.env.VUE_APP_ETHEREUM_API_URL,
)

export const boundless = new ethers.Contract(
  process.env.VUE_APP_BOUNDLESS_ADDRESS as string,
  Boundless,
  provider,
)

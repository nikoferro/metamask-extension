import {
  AVALANCHE_CHAIN_ID,
  BSC_CHAIN_ID,
  BUYABLE_CHAINS_MAP,
  MAINNET_CHAIN_ID,
  POLYGON_CHAIN_ID,
} from '../../../shared/constants/network';

export const formatMoonpaySymbol = (symbol, chainId = MAINNET_CHAIN_ID) => {
  if (!symbol) {
    return symbol;
  }
  let _symbol = symbol?.toLowerCase();
  if (chainId === BSC_CHAIN_ID || chainId === POLYGON_CHAIN_ID) {
    _symbol = `${_symbol}_${BUYABLE_CHAINS_MAP?.[chainId]?.network}`;
  } else if (chainId === AVALANCHE_CHAIN_ID) {
    _symbol = `${_symbol}_cchain`;
  }
  return _symbol;
};

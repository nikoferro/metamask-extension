import {
  AVALANCHE_CHAIN_ID,
  BSC_CHAIN_ID,
  MAINNET_CHAIN_ID,
  POLYGON_CHAIN_ID,
  CELO_CHAIN_ID,
} from '../../../shared/constants/network';
import { formatMoonpaySymbol } from './moonpay';

describe('Moonpay Utils', () => {
  describe('formatMoonpaySymbol', () => {
    it('should return the same input if falsy input is provided', () => {
      expect(formatMoonpaySymbol()).toBe(undefined);
      expect(formatMoonpaySymbol(null)).toBe(null);
      expect(formatMoonpaySymbol('')).toBe('');
    });

    it('should return the symbol in lowercase if no chainId is provided', () => {
      const result = formatMoonpaySymbol('ETH');
      expect(result).toStrictEqual('eth');
    });

    it('should return the symbol in lowercase if chainId is different than Avalanche/BSC/Polygon', () => {
      const result = formatMoonpaySymbol('ETH', MAINNET_CHAIN_ID);
      expect(result).toStrictEqual('eth');
      const result2 = formatMoonpaySymbol('celo', CELO_CHAIN_ID);
      expect(result2).toStrictEqual('celo');
    });

    it('should return the symbol in lowercase with the network name if chainId is Avalanche/BSC/Polygon', () => {
      const result = formatMoonpaySymbol('BNB', BSC_CHAIN_ID);
      expect(result).toStrictEqual('bnb_bsc');
      const result2 = formatMoonpaySymbol('MATIC', POLYGON_CHAIN_ID);
      expect(result2).toStrictEqual('matic_polygon');
      const result3 = formatMoonpaySymbol('AVAX', AVALANCHE_CHAIN_ID);
      expect(result3).toStrictEqual('avax_cchain');
    });
  });
});

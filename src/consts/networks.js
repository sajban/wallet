const networks = [{
		id: 'ethereum',
		chainId: 1,
		rpc: 'https://mainnet.infura.io/v3/3d22938fd7dd41b7af4197752f83e8a1',
		nativeAssetSymbol: 'ETH',
		name: 'Ethereum',
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
	},  {
		id: 'polygon',
		chainId: 137,
		rpc: 'https://polygon-rpc.com/rpc',
		nativeAssetSymbol: 'MATIC',
		name: 'Polygon',
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'
	}, {
		id: 'avalanche',
		chainId: 43114,
		rpc: 'https://api.avax.network/ext/bc/C/rpc',
		nativeAssetSymbol: 'AVAX',
		name: 'Avalanche',
		icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png'
	}, {
		id: 'arbitrum',
		chainId: 42161,
		rpc: 'https://arb1.arbitrum.io/rpc',
		nativeAssetSymbol: 'AETH',
		name: 'Arbitrum',
		icon: 'https://bridge.arbitrum.io/images/Arbitrum_Symbol_-_Full_color_-_White_background.svg'
}]

export default networks

const path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        '@chakra-ui/react': '@chakra-ui/react',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                use: ['file-loader']
            },
        ],
    }
}
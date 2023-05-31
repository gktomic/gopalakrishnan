module.exports = {
    target: "node",
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
                include: [Path.join(__dirname, "assets")],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
};
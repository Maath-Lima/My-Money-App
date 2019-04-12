const webpack = require('webpack')

/* Este plugin é responsável por interpretar arquivos .css */
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/* Exports é utilizado para deixar as declarações desse módulo 
   visíveis fora deste arquivo  
   Aqui está declarado o ponto de entrada para a aplicação;
   Onde vai gerar a saída do arquivo javascript */
module.exports = {
    entry: './src/index.jsx', /* entrada */
    output: {                 /* saída */
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {              /* Dados sobre o servidor da aplicação */
        port: 8080,
        contentBase: './public',  /* Pasta onde está os arquivos*/
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [ 
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css') /* Nome do arquivo que será gerado após interpretar o csss*/
    ],
    module: {
        loaders: [{                      /* loaders são responsáveis por carregar os arquivos que resolverão nosso problemas, como o Babel*/
            test: /.js[x]?$/,            /* tipo de arquivo que será carregado */
            loader: 'babel-loader',      /* qual loader iremos utilizar para a tarefa. Essa dependência deve instalada e referenciada no arquivo package.json */
            exclude: /node_modules/,     /* queremos apenas que o Babel leia os js de nossa aplicação, por isso retiramos a pastanode_module  */
            query: {                     /* dentro de query definimos o que será interpretado pelo Babel interprete */
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}
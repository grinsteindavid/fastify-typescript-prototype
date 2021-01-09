import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import run from '@rollup/plugin-run';

const { NODE_ENV } = process.env

export default {
    input: 'src/server.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
        del({ targets: 'dist/*' }),
        typescript(),
        NODE_ENV === 'development' && run({ execArgv: ['--inspect'] })
    ]
};
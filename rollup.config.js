import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/server.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [typescript()]
};
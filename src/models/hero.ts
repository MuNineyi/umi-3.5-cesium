import { Effect, Reducer } from 'umi';

export interface HeroModelState {
    name: string
}

export interface HeroModelType {
    namespace: 'hero';
    state: HeroModelState;
    effects: {
        query: Effect;
        change: Effect;
    };
    reducers: {
        save: Reducer<HeroModelState>;
    }
}

 const HeroModel: HeroModelType = {
    namespace: 'hero',
    state: {
        name: 'hero',
    },
    effects: {
        *query({ payload }: any, { call, put }: any) {
            console.log(payload)
        },
      *change({ payload }: any, { call, put }: any) {
        console.log('change')
      },
    },
    reducers: {
        save(state: any, action: { payload: any; }) {
            return {
                ...state,
                ...action.payload,
            };
        },

    },
};

export default HeroModel;

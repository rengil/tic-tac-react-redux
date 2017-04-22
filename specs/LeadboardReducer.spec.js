import reducer from '../src/reducers/Leaderboard';
import types from '../src/constants/ActionTypes';

describe('leadboard reducers', () => {
  it('it should create a leaderboard with 1 victory if first win', () => {
    const records = [];
    const record = {
      name: 'Renan'
    };

    expect(
      reducer({ records }, {
        type: types.ADD_TO_LEADERBOARD,
        record
      })
    ).toEqual(
      {
        records: [
          {
            name: 'Renan',
            victories: 1
          }
        ]
      }
    );
  });

  it('it should increment de victory if is recurring win', () => {
    const records = [{ name: 'Renan', victories: 1 }];
    const record = {
      name: 'Renan'
    };

    expect(
      reducer({ records }, {
        type: types.ADD_TO_LEADERBOARD,
        record
      })
    ).toEqual(
      {
        records: [
          {
            name: 'Renan',
            victories: 2
          }
        ]
      }
    );
  });

  it('it should increment de victory if is recurring win', () => {
    const records = [{ name: 'Flávia', victories: 1 }, { name: 'Renan', victories: 1 }];
    const record = {
      name: 'Renan'
    };

    expect(
      reducer({ records }, {
        type: types.ADD_TO_LEADERBOARD,
        record
      })
    ).toEqual(
      {
        records: [
          { name: 'Flávia', victories: 1 },
          { name: 'Renan', victories: 2 }
        ]
      }
    );
  });

  it('it should increment de victory if is recurring win', () => {
    const records = [{ name: 'Renan', victories: 1 }];
    const record = {
      name: 'Flávia'
    };

    expect(
      reducer({ records }, {
        type: types.ADD_TO_LEADERBOARD,
        record
      })
    ).toEqual(
      {
        records: [
          { name: 'Renan', victories: 1 },
          { name: 'Flávia', victories: 1 }
        ]
      }
    );
  });
});

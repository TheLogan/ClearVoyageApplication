export const database = {
  vessels: [
      {
          id: 1,
          name: 'WDS Penelope',
          description: 'Looks very cool!',
          image: 'https://i.imgur.com/SjFnz17.png',
      },
      {
          id: 2,
          name: 'WDS Odysseus',
          description: 'Might be greatest tanker ever built',
          image: 'https://i.imgur.com/gfrqUf8.png',
      },
      {
          id: 3,
          name: 'WDS Icarus',
          description: 'Secretly a plane - don\'t tell the others!',
          image: 'https://i.imgur.com/IdEqWWc.png',
      },
  ],
  voyages: [
      {
          id: 1,
          vesselId: 2,
          name: 'ODY-2020-1',
          description: '44000 MT LPG from Ulsan to Houston',
          image: 'https://i.imgur.com/BpePwxW.png',
      },
      {
          id: 2,
          vesselId: 3,
          name: 'ICA-2020-1',
          description: '138 passengers from Copenhagen to Athens',
          image: 'https://i.imgur.com/Z1JKnhB.png',
      },
      {
          id: 3,
          vesselId: 3,
          name: 'ICA-2020-2',
          description: '137 passengers from Athens to Copenhagen',
          image: 'https://i.imgur.com/Ew3IbTS.png',
      },
  ],
};

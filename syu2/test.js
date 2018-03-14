var skierData = [
    { name: 'Clement', time: 48.58 },
    { name: 'Henrik', time: 47.72 },
    { name: 'Sebastian', time: 48.53 },
    { name: 'Andre', time: 47.93 },
    { name: 'Ted', time: 102.3 },
    { name: 'Manfred', time: 48.4 },
    { name: 'Alexis', time: 48.54 },
    { name: 'Victor', time: 48.34 },
  ];

  var input = skierData;
  var res = input.reduce( (acc,cur) =>  acc + ', ' + cur.name,
    input[0].name
    );

    console.log(res)
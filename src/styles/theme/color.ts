const slate = {
  slate1: '#fcfcfd',
  slate2: '#f9f9fb',
  slate3: '#f0f0f3',
  slate4: '#e8e8ec',
  slate5: '#e0e1e6',
  slate6: '#d9d9e0',
  slate7: '#cdced6',
  slate8: '#b9bbc6',
  slate9: '#8b8d98',
  slate10: '#80838d',
  slate11: '#60646c',
  slate12: '#1c2024',
} as const;

const red = {
  red1: '#fffcfc',
  red2: '#fff7f7',
  red3: '#feebec',
  red4: '#ffdbdc',
  red5: '#ffcdce',
  red6: '#fdbdbe',
  red7: '#f4a9aa',
  red8: '#eb8e90',
  red9: '#e5484d',
  red10: '#dc3e42',
  red11: '#ce2c31',
  red12: '#641723',
} as const;

const yellow = {
  yellow1: '#fdfdf9',
  yellow2: '#fefce9',
  yellow3: '#fffab8',
  yellow4: '#fff394',
  yellow5: '#ffe770',
  yellow6: '#f3d768',
  yellow7: '#e4c767',
  yellow8: '#d5ae39',
  yellow9: '#ffe629',
  yellow10: '#ffdc00',
  yellow11: '#9e6c00',
  yellow12: '#473b1f',
} as const;

const green = {
  green1: '#fbfefc',
  green2: '#f4fbf6',
  green3: '#e6f6eb',
  green4: '#d6f1df',
  green5: '#c4e8d1',
  green6: '#adddc0',
  green7: '#8eceaa',
  green8: '#5bb98b',
  green9: '#30a46c',
  green10: '#2b9a66',
  green11: '#218358',
  green12: '#193b2d',
} as const;

const blue = {
  blue1: '#fbfdff',
  blue2: '#f4faff',
  blue3: '#e6f4fe',
  blue4: '#d5efff',
  blue5: '#c2e5ff',
  blue6: '#acd8fc',
  blue7: '#8ec8f6',
  blue8: '#5eb1ef',
  blue9: '#0090ff',
  blue10: '#0588f0',
  blue11: '#0d74ce',
  blue12: '#113264',
} as const;

const color = {
  ...slate,
  ...red,
  ...yellow,
  ...green,
  ...blue,
};

export default color;

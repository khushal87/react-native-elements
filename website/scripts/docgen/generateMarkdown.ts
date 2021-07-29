import json2md from 'json2md';
import _ from 'lodash';

json2md.converters.header = function (input, json2md) {
  return json2md([
    { hr: '' },
    { p: `id: ${input.id.toLowerCase()}` },
    { p: `title: ${input.id}` },
    { p: `slug: /${input.id.toLowerCase()}` },
    { hr: '' },
  ]);
};

function generateComponentsDescriptions(input) {
  const childComponentDescriptions = Object.keys(input).map((key) => {
    return json2md([
      {
        link: { title: key, source: `#${key}` },
      },
      {
        p: input[key].description,
      },
    ]);
  });
  return childComponentDescriptions;
}

json2md.converters.components = function (input, json2md) {
  if (input.childrens) {
    let markdown = json2md({ h2: 'Components' });
    markdown += json2md({
      ul: generateComponentsDescriptions(input.childrens),
    });
    return markdown;
  } else {
    return '';
  }
};

json2md.converters.imports = function (input, json2md) {
  return json2md([
    {
      p: `import Usage from './usage/${input.component}/${input.component}.md'`,
    },
  ]);
};

json2md.converters.usage = function (input, json2md) {
  return json2md([
    { h2: `Usage` },
    {
      p: `<Usage />`,
    },
    { hr: '' },
  ]);
};

function generatePropsLinks(props) {
  const propLinks = Object.keys(props).map((key) => {
    return json2md({ link: { title: key, source: `#${key.toLowerCase()}` } });
  });
  return propLinks;
}

json2md.converters.props = function (input, json2md) {
  let markdown = json2md([
    { h2: 'Props' },
    { h3: input.displayName },
    { ul: generatePropsLinks(input.props) },
  ]);
  if (input.childrens) {
    markdown += Object.keys(input.childrens)
      .map((key) => {
        const props = input.childrens[key].props;
        return json2md([
          { h3: key },
          _.isEmpty(props)
            ? { p: 'None' }
            : { ul: generatePropsLinks(input.childrens[key].props) },
        ]);
      })
      .join('');
  }
  return markdown;
};

function generatePropsReference(props) {
  const propsReference = Object.keys(props)
    .map((key) => {
      const prop = props[key];
      return json2md([
        { h4: prop.name },
        { p: prop.description },
        {
          table: {
            headers: ['Type', 'Default'],
            rows: [
              {
                Type: prop.type ? prop.type.name : 'None',
                Default: prop.defaultValue ? prop.defaultValue.value : 'None',
              },
            ],
          },
        },
        { hr: '' },
      ]);
    })
    .join('');
  return propsReference;
}

// function generatePropsTable(props) {
//   const propsData = [];
//   Object.keys(props).map((key) => {
//     const prop = props[key];
//     propsData.push({
//       Name: prop.name,
//       Type: prop.type ? prop.type.name : 'None',
//       Default: prop.defaultValue ? prop.defaultValue.value : 'None',
//       Description: prop.description,
//     });
//   });
//   return propsData;
// }

// json2md.converters.propsTable = function (input, json2md) {
//   let markdown = json2md([{ h2: 'Reference' }, { h3: input.displayName }]);
//   markdown += json2md([
//     {
//       table: {
//         headers: ['Name', 'Type', 'Default', 'Description'],
//         rows: generatePropsTable(input.props),
//       },
//     },
//   ]);
//   if (input.childrens) {
//     markdown += Object.keys(input.childrens)
//       .map((key) => {
//         const props = input.childrens[key].props;
//         return (
//           json2md([{ h3: key }]) +
//           (_.isEmpty(props)
//             ? json2md({ p: 'None' })
//             : json2md([
//                 {
//                   table: {
//                     headers: ['Name', 'Type', 'Default', 'Description'],
//                     rows: generatePropsTable(props),
//                   },
//                 },
//               ]))
//         );
//       })
//       .join('');
//   }
//   return markdown;
// };

json2md.converters.propsData = function (input, json2md) {
  let markdown = json2md([{ h2: 'Reference' }, { h3: input.displayName }]);
  markdown += generatePropsReference(input.props);
  if (input.childrens) {
    markdown += Object.keys(input.childrens)
      .map((key) => {
        const props = input.childrens[key].props;
        return (
          json2md([{ h3: key }]) +
          (_.isEmpty(props)
            ? json2md({ p: 'None' })
            : generatePropsReference(props))
        );
      })
      .join('');
  }
  return markdown;
};

export const generateMarkdown = (data) => {
  return json2md([
    { header: { id: data.displayName } },
    {
      imports: {
        component: data.displayName,
      },
    },
    { p: data.description },
    {
      components: {
        childrens: data.childrens,
      },
    },
    { usage: '' },
    { props: data },
    { propsData: data },
  ]);
};

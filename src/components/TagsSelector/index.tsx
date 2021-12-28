import React, { useState, useEffect } from 'react';
import { Container, Selector } from './styles'
import { tagColorsSchema } from '../../schemas/tagColorsSchema';

interface Props {
  handleChange: React.MouseEventHandler<HTMLElement>;
  selecteds: any[];
}

export const TagsSelector = ({ handleChange, selecteds }: Props): JSX.Element=> {
  const [options, setOptions] = useState<any[]>([])

  const initialOptions = () => {
    return Object.entries(tagColorsSchema).map(([tagName, tagData]) => ({
      tagName: tagName,
      ...tagData,
      isSelected: false,
    }));
  };

  const handleSelectTags = ({ tagName }: any) => {
    const edited = options.map((item: any) =>
      item.tagName === tagName
        ? { ...item, isSelected: !item.isSelected }
        : item
    );
    setOptions(edited);
    const selectedTags: any = edited
      .filter((tag) => !!tag.isSelected)
      .map((tag) => tag.tagName);
    handleChange(selectedTags);
  };

  useEffect(() => {
    const test = initialOptions().map((option) =>
      selecteds.includes(option.tagName)
        ? { ...option, isSelected: true }
        : option
    );
    setOptions(test);
  }, [selecteds]);

  return (
    <Container>
      {options.map(({ tagName, isSelected, color, background }) => {
        return (
          <Selector
            key={tagName}
            onClick={() => handleSelectTags({ tagName: tagName })}
            isSelected={isSelected}
            color={color}
            background={background}
          >
            {tagName}
          </Selector>
        )
      })}
    </Container>
  );
}

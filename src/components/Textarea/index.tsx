import { useRef, useEffect } from 'react';
import { Container, Field } from './styles';

interface Props {
  value: string;
  handleChange: React.FormEventHandler<HTMLTextAreaElement>;
  autofocus: boolean;
  isDone: boolean;
}

export const Textarea = ({
  value,
  handleChange,
  autofocus,
  isDone,
}: Props): JSX.Element => {
  const textareaRef = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    if (autofocus) textareaRef.current.focus();
  }, [autofocus]);

  return (
    <Container isDone={isDone}>
      <Field
        ref={textareaRef}
        async={true}
        defaultValue={value}
        onChange={handleChange}
      />
    </Container>
  );
};

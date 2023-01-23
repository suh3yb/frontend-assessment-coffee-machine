import styled, { css } from 'styled-components';

interface HeadingProps {
  variant: 'title' | 'subtitle';
}

export const Span = styled.span`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.374px;
`;

export const Heading = styled.h2.attrs<HeadingProps>(props => ({
  as: props.variant === 'title' ? 'h1' : 'h2',
}))<HeadingProps>`
  ${({ variant }) =>
    variant === 'title'
      ? css`
          font-weight: normal;
          font-size: 24px;
          line-height: 33px;
          letter-spacing: 0.374px;
        `
      : css`
          font-weight: bold;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.374px;
        `}}
`;

export const ErrorMessage = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.error};
`;

import styled from 'styled-components';
import { PrimaryButton } from '../buttons';

export const Media = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 80px;
  }
`;

Media.displayName = 'Media';

export const MediaButton = styled(PrimaryButton)``;

MediaButton.displayName = 'MediaButton';

export const MediaBody = styled.div`
  order: ${props => (props.right ? 1 : 0)};
  text-align: ${props => (props.right ? 'right' : 'left')};
  width: 50%;

  ${MediaButton} {
    margin-right: ${props => (props.right ? 0 : '30px')};
    margin-left: ${props => (props.right ? '30px' : 0)};
  }
`;

MediaBody.displayName = 'MediaBody';

export const MediaImage = styled.div`
  background-color: grey;
  width: 45%;
`;

MediaImage.displayName = 'MediaImage';

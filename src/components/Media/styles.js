import styled from 'styled-components';

export const Media = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

Media.displayName = 'Media';

export const MediaBody = styled.div`
  order: ${props => (props.right ? 1 : 0)};
  text-align: ${props => (props.right ? 'right' : 'left')};
  width: 50%;
`;

MediaBody.displayName = 'MediaBody';

export const MediaImage = styled.div`
  background-color: grey;
  width: 45%;
`;

MediaImage.displayName = 'MediaImage';

import styled from "@emotion/styled";

export const PostItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 포스트 날짜
export const PostDate = styled.p`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

// 포스트 제목
export const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PostContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

// 좋아요, 댓글 수 컨테이너
export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999;
`;

// 좋아요 아이콘
export const LikeIcon = styled.span`
  margin-right: 5px;
  display: flex; // 추가: 아이콘과 숫자를 가로로 정렬
  align-items: center; // 추가: 아이콘과 숫자를 세로 중앙 정렬

  &:before {
    content: "♡";
    margin-right: 3px;
  }
`;

// 댓글 수 아이콘
export const CommentIcon = styled.span`
  margin-left: 10px;
  margin-right: 5px;
  display: flex; // 추가: 아이콘과 숫자를 가로로 정렬
  align-items: center; // 추가: 아이콘과 숫자를 세로 중앙 정렬

  &:before {
    content: "○";
    margin-right: 3px;
  }
`;

// 좋아요 수
export const LikeCount = styled.span``;

// 댓글 수
export const CommentCount = styled.span``;

// 수정 버튼
export const EditButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: #5499f2;
  cursor: pointer;
  margin-right: 10px;
  padding: 5px;
`;

// 삭제 버튼
export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: #5499f2;
  cursor: pointer;
  padding: 5px;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

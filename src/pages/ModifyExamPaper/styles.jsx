import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  font-family: sans-serif;
  padding: 20px;
`;

// 헤더
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 10px 0;
`;

// 로고
export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: #5499f2;
  border-radius: 50%;
  margin-right: 10px;
`;

// Changelog 타이틀
export const ChangelogTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

// 사용자 드롭다운
export const UserDropdown = styled.span`
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// 새 포스트 추가 버튼
export const AddPostButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin: 20px auto;
  cursor: pointer;
`;

// 새 포스트 추가 아이콘
export const AddPostIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #5499f2;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

// 새 포스트 추가 텍스트
export const AddPostText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

// 포스트 아이템
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

// 새로운 기능 라벨
export const NewFeatureLabel = styled.span`
  background-color: #5499f2;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 3px;
  margin-bottom: 10px;
  display: inline-block;
`;

// 포스트 내용
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

// 에디터 설정 섹션
export const EditorSettingsSection = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 에디터 설정 제목
export const EditorSettingsTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #f8f9fa; //임시로 배경색과 맞춤
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

// 에디터 설정 내용
export const EditorSettingsContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
  background-color: #ffffe0;
`;

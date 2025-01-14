import {
  PostContent,
  PostItem,
  PostDate,
  PostTitle,
  PostMeta,
  LikeIcon,
  LikeCount,
  CommentCount,
  CommentIcon,
  ButtonContainer,
  EditButton,
  DeleteButton,
} from "./styles";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useCallback } from "react";
import { SortableItem } from "@utils/SortableItem";
import useDragAndDrop from "@hooks/useDragAndDrop";
import useGetExamPaper from "@hooks/GetData/useGetExamPaper";
import axios from "axios";

const ModifyExamPaperBody = ({
  examPaperListId,
  onClickEditExamProblem,
  onClickDeleteProblem,
}) => {
  const {
    data: examPaper,
    error: examPaperError,
    mutate: examPaperMutate,
  } = useGetExamPaper(examPaperListId);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100, // 100ms 이상 누르고 있어야 드래그 시작
        tolerance: 5, // 5px 이상 이동해야 드래그 시작
      },
    })
  );

  const handleUpdate = async (newOrder) => {
    try {
      await axios.patch(`/api/main/examPaper/${examPaperListId}/update`, {
        newOrder,
      });
      examPaperMutate(newOrder, false);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const { orderedData, handleDragEnd } = useDragAndDrop(
    examPaper,
    handleUpdate
  );

  if (examPaperError) {
    return <div>Failed to load exam papers</div>;
  }

  if (!orderedData) {
    return <div> loading....</div>;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={orderedData}
        strategy={verticalListSortingStrategy}
      >
        {orderedData && orderedData.length > 0 ? (
          orderedData.map((data, index) => {
            return (
              <SortableItem key={data.id} id={data.id}>
                <PostItem key={data.id}>
                  <PostDate>
                    {new Date(data.updatedAt).toLocaleString("ko-KR")}
                  </PostDate>
                  <PostTitle>
                    {index + 1}번. {data.title}
                  </PostTitle>
                  <PostContent>content</PostContent>
                  <PostMeta>
                    <LikeIcon />
                    <LikeCount>13</LikeCount>
                    <CommentIcon />
                    <CommentCount>290</CommentCount>
                  </PostMeta>
                  <ButtonContainer>
                    <EditButton
                      onClick={() => {
                        onClickEditExamProblem(index);
                      }}
                    >
                      Edit
                    </EditButton>
                    <DeleteButton
                      onClick={() => {
                        onClickDeleteProblem(data.id);
                      }}
                    >
                      Delete
                    </DeleteButton>
                  </ButtonContainer>
                </PostItem>
              </SortableItem>
            );
          })
        ) : (
          <div>no data</div>
        )}
      </SortableContext>
    </DndContext>
  );
};

export default ModifyExamPaperBody;

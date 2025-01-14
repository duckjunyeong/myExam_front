import React, { useCallback } from "react";
import {
  ModalBody,
  ModalOverlay,
  ModalContent,
  Icon,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalButton,
} from "./styles";
import {
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TimeLabel,
  TableWrapper,
} from "@components/Content_EditTimeTable/styles";
import axios from "axios";
import { toast } from "react-toastify";
const BackUpModal = ({
  onClose,
  timeSlices,
  schedule,
  willDeleteSchedule,
  propMutate,
}) => {
  const onConfirm = useCallback(async () => {
    await axios
      .delete("/api/schedules/backup/delete", {
        data: {
          data: willDeleteSchedule,
        },
      })
      .then(() => {
        propMutate();
        toast.success("백업되었습니다.");
      })
      .catch(() => toast.error("백업에 실패하였습니다."));
  }, [willDeleteSchedule]);

  const isTimeInWillDeleteSchedule = (time) => {
    return willDeleteSchedule?.some((item) => item.time === time);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <Icon>
            <i className="fas fa-triangle-exclamation"></i>
          </Icon>
          <ModalTitle>Preview</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <TableWrapper>
            <TableContainer>
              <TableHeader>
                <TableHeaderCell>시간</TableHeaderCell>{" "}
                {/* 시간 헤더 셀 추가 */}
              </TableHeader>
              <TableBody>
                {timeSlices?.map((time) => (
                  <TableRow key={time}>
                    <TableCell>
                      <TimeLabel>{time}</TimeLabel>
                    </TableCell>
                    <TableCell
                      key={time}
                      color={
                        isTimeInWillDeleteSchedule(time)
                          ? "#ffffff" // 흰색
                          : schedule[time]?.color
                      }
                    />
                  </TableRow>
                ))}
              </TableBody>
            </TableContainer>
          </TableWrapper>
        </ModalBody>
        <ModalFooter>
          <ModalButton className="cancel" onClick={onClose}>
            Cancel
          </ModalButton>
          <ModalButton className="deactivate" onClick={onConfirm}>
            Deactivate
          </ModalButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default BackUpModal;

import { memo, Suspense } from "react";
import Box from "@mui/material/Box";
import { AnimeGirlModel } from "../../components/AnimeGirlModel/AnimeGirlModel";
import { Canvas } from "@react-three/fiber";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: 0,
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
}));

export const TaskListPage = memo(() => {
  return (
    <StyledContainer>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 50, zoom: 5, near: 100, far: 3000 }}
      >
        <Suspense fallback={null}>
          <AnimeGirlModel />
        </Suspense>
      </Canvas>
    </StyledContainer>
  );
});

TaskListPage.displayName = "TaskListPage";

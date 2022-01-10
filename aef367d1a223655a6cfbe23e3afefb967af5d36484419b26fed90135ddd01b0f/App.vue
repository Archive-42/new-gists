<template>
    <JqxChart style="width: 850px; height: 500px"
        :title="'Fitness and exercise weekly scorecard'"
        :description="'Time spent in vigorous exercise by activity'"
        :showLegend="true" :enableAnimations="true" :padding="padding"
        :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
        :valueAxis="valueAxis" :seriesGroups="seriesGroups" :colorScheme="'scheme05'">
    </JqxChart>
</template>

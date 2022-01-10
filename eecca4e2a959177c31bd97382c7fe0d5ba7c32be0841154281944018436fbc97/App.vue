<template>
    <JqxScheduler ref="myScheduler"
        :width="getWidth" :height="600" :source="dataAdapter" :date="date" :showLegend="true" :view="'weekView'"
        :appointmentDataFields="appointmentDataFields" :resources="resources" :views="views"
    />
</template>
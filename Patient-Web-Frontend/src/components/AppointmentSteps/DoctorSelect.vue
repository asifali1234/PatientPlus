<template>
    <div>
                <label for="select-date">Select Date</label>
                <select id="select-date">
                    <option v-for="date in dates">{{date.day}},{{date.month}}</option>
                </select>
            </div>
            <div>
                <h2>Doctors</h2>
                
            </div>
</template>
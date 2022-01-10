        if (v == btnTimePicker) {

            final Calendar c = Calendar.getInstance();
            mHour = c.get(Calendar.HOUR_OF_DAY);
            mMinute = c.get(Calendar.MINUTE);

            TimePickerDialog timePickerDialog = new TimePickerDialog(this,
                    new TimePickerDialog.OnTimeSetListener() {

                        @Override
                        public void onTimeSet(TimePicker view, int hourOfDay,
                                              int minute) {
                            DateFormat format =  DateFormat.getTimeInstance();
                            c.set(Calendar.HOUR_OF_DAY,hourOfDay);
                            c.set(Calendar.MINUTE,minute);
                            txtTime.setText(format.format(c.getTime()));
                        }
                    }, mHour, mMinute, false);
            timePickerDialog.show();
        }
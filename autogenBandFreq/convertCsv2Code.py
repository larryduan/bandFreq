import csv

isLTE = True
isTDD = False

filename = r'.\LTE_FDD.csv'
ag_filename = r'.\ag_lte_fdd.txt'




with open(filename) as f, open(ag_filename, 'w') as f_ag:
    reader = csv.DictReader(f)

    for row in reader:
        isDLOnly = False
        spacing = 0

        if 'DL Only' in row['Type']:
            type = 'DL'
            isDLOnly = True
        elif 'TDD' in row['Type']:
            type = 'tdd'
        else:
            type = 'default'

        band_info = '{\n  '
        band_info += 'band: ' + row['Band'] + ', '
        band_info += 'name: \'' + row['Band(str)'] + '\', '
        band_info += 'type: \'' + type + '\', '

        ## spacing of different channels on BC5 of CDMA could be different
        if ',' in row['Channel Spacing']:
            band_info += 'spacing: [' + row['Channel Spacing'] + '], '
        else:
            band_info += 'spacing: ' + row['Channel Spacing'] + ', '

        if isLTE:
            band_info += 'bandwidths: [' + row['Bandwidths'] + '], '

        dl_chan_range = row['DL Channel Range']
        dl_chan_begins = ''
        dl_chan_ends = ''
        if ',' in dl_chan_range:
            new_chan_range = ''
            first = True
            for sub_str in dl_chan_range.split(','):
                if first:
                    first = False
                    new_chan_range += '\"' + sub_str + '\"'
                    dl_chan_begins += sub_str.split('-')[0]
                    dl_chan_ends += sub_str.split('-')[1]
                else:
                    new_chan_range += ', \"' + sub_str + '\"'
                    dl_chan_begins += ', ' + sub_str.split('-')[0]
                    dl_chan_ends += ', ' + sub_str.split('-')[1]

            dl_chan_range = new_chan_range
        else:
            dl_chan_begins = row['DL Channel Range'].split('-')[0]
            dl_chan_ends = row['DL Channel Range'].split('-')[1]
            dl_chan_range = '\"' + dl_chan_range + '\"'

        ul_chan_range = row['UL Channel Range']
        ul_chan_begins = ''
        ul_chan_ends = ''
        if ',' in ul_chan_range:
            new_chan_range = ''
            first = True
            for sub_str in ul_chan_range.split(','):
                if first:
                    first = False
                    new_chan_range += '\"' + sub_str + '\"'
                    ul_chan_begins += sub_str.split('-')[0]
                    ul_chan_ends += sub_str.split('-')[1]
                else:
                    new_chan_range += ', \"' + sub_str + '\"'
                    ul_chan_begins += ', ' + sub_str.split('-')[0]
                    ul_chan_ends += ', ' + sub_str.split('-')[1]

            ul_chan_range = new_chan_range
        else:
            if isDLOnly or isTDD:
                ul_chan_range = ''
            else:
                ul_chan_begins = row['UL Channel Range'].split('-')[0]
                ul_chan_ends = row['UL Channel Range'].split('-')[1]
                ul_chan_range = '\"' + ul_chan_range + '\"'

        band_info += '\n  '
        band_info += 'DL: { '
        band_info += 'chanRange: [' + dl_chan_range + '], '
        band_info += 'chanBegins: [' + dl_chan_begins + '], '
        band_info += 'chanEnds: [' + dl_chan_ends + '], '
        band_info += 'freqBase: [' + row['DL Frequency Base'] + '], '
        band_info += '},'

        band_info += '\n  '
        band_info += 'UL: { '
        band_info += 'chanRange: [' + ul_chan_range + '], '
        band_info += 'chanBegins: [' + ul_chan_begins + '], '
        band_info += 'chanEnds: [' + ul_chan_ends + '], '
        band_info += 'freqBase: [' + row['UL Frequency Base'] + '], '
        band_info += '},'
        band_info += '\n},'
        print(band_info)

        f_ag.write(band_info)

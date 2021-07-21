//
//  WorldView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import MapKit
import SwiftUI

struct WorldView: View {
    @EnvironmentObject var locationsService: LocationsService
    
    @State var region = MKCoordinateRegion(
        center: CLLocationCoordinate2D(
            latitude: 24.7068,
            longitude: 46.6697
        ),
        span: MKCoordinateSpan(
            latitudeDelta: 40,
            longitudeDelta: 40
        )
    )
    
    var body: some View {
        Map(
            coordinateRegion: $region,
            annotationItems: locationsService.locations
        ) { location in
            MapAnnotation(
                coordinate: CLLocationCoordinate2D(
                    latitude: location.latitude,
                    longitude: location.longitude
                )
            ) {
                NavigationLink(
                    destination: LocationInfoView(
                        location: location
                    )
                ) {
                    Text(location.countryFlag)
                        .font(.largeTitle)
                }
            }
        }
        .navigationTitle("Locations")
    }
}
